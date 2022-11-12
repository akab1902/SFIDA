import React from "react";
import { Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { isChrome, isSafari } from "react-device-detect";

export default class MyCardSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      reportName: "",
      reportType: "",
      reportDescription: "",
      reportYear: "",
      selectedFile: "",
      isFilePicked: false,
      isSubmitted: false,
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ loading: true });
    const formData = new FormData();
    formData.append("File", this.state.selectedFile);
    formData.append("reportName", this.state.reportName);
    formData.append("reportType", this.state.reportType);
    formData.append("reportDescription", this.state.reportDescription);
    formData.append("reportYear", this.state.reportYear);

    fetch("http://127.0.0.1:5000/uploadreport", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        // event.preventDefault();
        // this.props.history.push('/CompanyPage')
      });

    setTimeout(
      function () {
        //Start the timer
        this.setState({ isSubmitted: true, loading: false });
      }.bind(this),
      3000
    );
  }

  changeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      isFilePicked: true,
    });
  };

  render() {

    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Upload a new report
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Report Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-full px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Report Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="reportName"
                      value={this.state.reportName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Report Type
                      <select
                        value={this.state.reportType}
                        onChange={this.handleChange}
                        name="reportType"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="Annual">Annual Report</option>
                        <option value="Quarterly">Quarterly Report</option>
                        <option value="Sales">Sales Report</option>
                        <option value="Analytical">Analytical Report</option>
                        <option value="Inventory">Inventory Report</option>
                        <option value="Marketing">Marketing Report</option>
                        <option value="Social Media">Marketing Report</option>
                        <option value="Budget">Budget Report</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Year
                      <select
                        value={this.state.reportYear}
                        onChange={this.handleChange}
                        name="reportYear"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-full px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description
                    </label>
                    <textarea
                      className="border-0 px-3 py-6 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={this.state.reportDescription}
                      onChange={this.handleChange}
                      name="reportDescription"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Upload File (PDF, Word)
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      File
                    </label>
                    <input type="file" onChange={this.changeHandler} />
                    {this.state.isFilePicked ? (
                      <div>
                        <p>Filetype: {this.state.selectedFile.type}</p>
                        <p>Size in bytes: {this.state.selectedFile.size}</p>
                        <p>
                          lastModifiedDate:{" "}
                          {isChrome ? this.state.selectedFile.lastModifiedDate.toLocaleDateString() : (isSafari ? Date(this.state.selectedFile.lastModified) : "")}
                        </p>
                      </div>
                    ) : (
                      <p>No file is selected</p>
                    )}
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <br></br>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {this.state.loading ? (
          <Oval heigth="100" width="100" color="grey" ariaLabel="loading" />
        ) : (
          <br></br>
        )}
        {this.state.isSubmitted ? (
          <div className="align-middle relative flex flex-col min-w-0 break-words bg-white w-6/12 mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h6 className="text-blueGray-400 text-lg mt-3 font-bold uppercase">
                    Analysis results
                  </h6>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-m whitespace-nowrap p-4 text-left">
                      Environmental
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">69</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-m flex rounded bg-red-200">
                            <div
                              style={{ width: "69%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                      Social
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">75</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-m flex rounded bg-purple-200">
                            <div
                              style={{ width: "75%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                      Governance
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">82</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-m flex rounded bg-emerald-200">
                            <div
                              style={{ width: "82%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <br></br>
        )}
      </>
    );
  }
}
