import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Grow from '@mui/material/Grow';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Zoom from '@mui/material/Zoom';

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
      openBackdrop: false,
      askPressed: false,
      receiveText: "Test answer which is long sentence",
      sendText: "",
      openFileLoad: false,
      openBackdrop2: false,
      uploadLabel: "UPLOAD",
      theQuestion: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleAsk = this.handleAsk.bind(this);
    this.handleSendText = this.handleSendText.bind(this);

  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAsk(event) {
    this.setState({ askPressed: true, openBackdrop2: true });
    // const formData = new FormData();
    // formData.append("Question", this.state.sendText);
    // axios({ method: "POST", url: `http://127.0.0.1:5000/question`, data: formData})
    //   .then((res) => {
    //     console.log(res.data.answer)
    //     this.setState({receiveText: res.data.answer})
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    setTimeout(
      function () {
        //Start the timer
        this.setState({ openBackdrop2: false });
      }.bind(this),
      3000
    );
  }

  handleSendText(event) {
    this.setState({ sendText: event.target.value, theQuestion: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ appearTextfield: ((prev) => !prev) })
    this.setState({ openBackdrop: true });
    // const formData = new FormData();
    // formData.append("File", this.state.selectedFile);

    // fetch("http://127.0.0.1:5000/uploadreport", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => {
    //     console.log(response);  
    //     response.json();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     // event.preventDefault();
    //     // this.props.history.push('/CompanyPage')
    //   });

    setTimeout(
      function () {
        //Start the timer
        this.setState({ isSubmitted: true, openBackdrop: false });
      }.bind(this),
      3000
    );
  }

  changeHandler = (event) => {
    const myLabel = event.target.files[0].name
    this.setState({
      selectedFile: event.target.files[0],
      isFilePicked: true,
      uploadLabel: myLabel
    });

  };

  handleSuggest1 = () => {
    this.setState({theQuestion: "What is iPhone"});
  }


  render() {


    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 wluxa" >
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
                Upload File (PDF, Word)
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4 h-full">
                  <div className="relative w-full mb-3 uploadbutton centeredd">
                    {/* <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      File
                    </label> */}
                    {/* {this.state.isFilePicked ? (
                      <CircularProgress open ={this.state.openFileLoad} style = {{position: "fixed", right: 800, top: 245}}/>
                      // <div>
                      //   <p>Filetype: {this.state.selectedFile.type}</p>
                      //   <p>Size in bytes: {this.state.selectedFile.size}</p>
                      //   <p>
                      //     lastModifiedDate:{" "}
                      //     {isChrome ? this.state.selectedFile.lastModifiedDate.toLocaleDateString() : (isSafari ? Date(this.state.selectedFile.lastModified) : "")}
                      //   </p>
                      // </div>
                    ) : (
                      <></>
                      // <p>No file is selected</p>
                    )} */}
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <FileUploadIcon sx={{ fontSize: 25 }} /> {this.state.uploadLabel}
                    </label>
                    <input id="file-upload" type="file" onChange={this.changeHandler} />
                    <button
                      className="submitclick"
                      type="button"
                      onClick={this.handleSubmit}
                      style={{ marginLeft: 15 }}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
              {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
              {/* <div className="centeredd">
                <button
                  className="submitclick bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div> */}
            </form>
            <div className="centeredd">
              {this.state.openBackdrop ? (
                <CircularProgress color="primary" style={{ marginTop: 30 }} />
              ) : (
                <br></br>
              )}
              {this.state.isSubmitted ? (
                <div>
                  <Grow in={this.state.appearTextfield} style={{ transformOrigin: '0 0 0' }}
                    {...(this.state.appearTextfield ? { timeout: 1000 } : {})}>
                    <TextField value = {this.state.theQuestion} placeholder="Ask Question..." variant="outlined" style={{ width: "50%", marginRight: 20, backgroundColor: "white" }} onChange={this.handleSendText} />
                  </Grow>
                  <Grow in={this.state.appearTextfield} style={{ transformOrigin: '0 0 0' }}
                    {...(this.state.appearTextfield ? { timeout: 1000 } : {})}>
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={this.handleAsk}>
                      ASK
                    </button>
                  </Grow>
                  <br></br>
                  <Grow in={this.state.appearTextfield} style={{ transformOrigin: '0 0 0' }}
                    {...(this.state.appearTextfield ? { timeout: 1000 } : {})}>
                    <button
                      className=" text-gray active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={this.handleSuggest1}
                      style={{margin:10}}>
                      What is iPhone?
                    </button>
                  </Grow>
                  {this.state.askPressed ? (
                    <>
                      <br></br>
                      {this.state.openBackdrop2 ? (

                        <CircularProgress color="primary" style={{ marginTop: 30 }} />

                      ) : (

                        <Grow in={this.state.appearTextfield} style={{ transformOrigin: '0 0 0' }} {...(this.state.appearTextfield ? { timeout: 1000 } : {})}>
                          <Alert severity="info" style={{ width: "50%", margin: "auto", marginTop: 40 }}>
                            <AlertTitle >{this.state.receiveText}</AlertTitle>
                          </Alert>
                        </Grow>

                      )}
                    </>
                  ) : (<></>)}


                </div>
                // <div className="align-middle relative flex flex-col min-w-0 break-words bg-white w-6/12 mb-6 shadow-lg rounded">
                //   <div className="rounded-t mb-0 px-4 py-3 border-0">
                //     <div className="flex flex-wrap items-center">
                //       <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                //         <h6 className="text-blueGray-400 text-lg mt-3 font-bold uppercase">
                //           Analysis results
                //         </h6>
                //       </div>
                //     </div>
                //   </div>
                //   <div className="block w-full overflow-x-auto">
                //     {/* Projects table */}
                //     <table className="items-center w-full bg-transparent border-collapse">
                //       <tbody>
                //         <tr>
                //           <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 w-6/12 text-m whitespace-nowrap p-4 text-left">
                //             Environmental
                //           </th>
                //           <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                //             <div className="flex items-center">
                //               <span className="mr-2">69</span>
                //               <div className="relative w-full">
                //                 <div className="overflow-hidden h-2 text-m flex rounded bg-red-200">
                //                   <div
                //                     style={{ width: "69%" }}
                //                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                //                   ></div>
                //                 </div>
                //               </div>
                //             </div>
                //           </td>
                //         </tr>
                //         <tr>
                //           <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                //             Social
                //           </th>
                //           <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                //             <div className="flex items-center">
                //               <span className="mr-2">75</span>
                //               <div className="relative w-full">
                //                 <div className="overflow-hidden h-2 text-m flex rounded bg-purple-200">
                //                   <div
                //                     style={{ width: "75%" }}
                //                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                //                   ></div>
                //                 </div>
                //               </div>
                //             </div>
                //           </td>
                //         </tr>
                //         <tr>
                //           <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                //             Governance
                //           </th>
                //           <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                //             <div className="flex items-center">
                //               <span className="mr-2">82</span>
                //               <div className="relative w-full">
                //                 <div className="overflow-hidden h-2 text-m flex rounded bg-emerald-200">
                //                   <div
                //                     style={{ width: "82%" }}
                //                     className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                //                   ></div>
                //                 </div>
                //               </div>
                //             </div>
                //           </td>
                //         </tr>
                //       </tbody>
                //     </table>
                //   </div>
                // </div>
              ) : (
                <br></br>
              )}          </div>
          </div>
        </div>
      </>
    );
  }
}