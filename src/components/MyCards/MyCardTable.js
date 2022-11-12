import React from "react";
import PropTypes from "prop-types";

// components

const test_companies = [
  {
    name: "Apple",
    ticker: "AAPL",
    price: 308.26,
    absChange: 2.81,
    relChange: 0.7,
    volume: 1200000,
    avgVolume: 12312313,
    marketCap: 122642462,
    peratio: 0.7,
  },
];

export default class MyCardTable extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: (a, b) => ("" + a.name).localeCompare(b.name),
    };
  }

  addRow(company, color) {
    const dcolor = company.relChange >= 0 ? "green" : "red";
    return (
      <tr key={company.ticker}>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-left flex items-center">
          {/* <img
            src={require("assets/img/bootstrap.jpg").default}
            className="h-12 w-12 bg-white rounded-full border"
            alt="..."
          ></img>{" "} */}
          <span
            className={
              "ml-3 font-bold " +
              +(color === "light" ? "text-blueGray-600" : "text-white")
            }
          >
            {company.name}
          </span>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.ticker}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          ${company.price} USD
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.absChange}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          <span style={{ color: dcolor }}>{company.relChange}%</span>
        </td>

        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.volume}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.avgVolume}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.marketCap}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
          {company.peratio === 0 ? "" : company.peratio}
        </td>
        {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-right">
          <TableDropdown />
        </td> */}
      </tr>
    );
  }

  generateRows(companies) {
    let rows = [];
    const sorted = companies.sort(this.state.filter);
    sorted.forEach((com) => {
      rows.push(this.addRow(com));
    });
    return rows;
  }

  render() {
    const color = this.props.color;
    const title = this.props.title ?? "Table";
    const companies = this.props.items.length
      ? this.props.items
      : test_companies;

    return (
      <>
        <div
          className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
          }
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                  {title}
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      this.setState({
                        filter: (a, b) => ("" + a.name).localeCompare(b.name),
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Company Name
                  </th>
                  <th
                    onClick={() => {
                      this.setState({
                        filter: (a, b) => ("" + a.name).localeCompare(b.name),
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Ticker
                  </th>
                  <th
                    onClick={() => {
                      console.log("Check");
                      this.setState({
                        filter: (a, b) => b.price - a.price,
                      });
                    }}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Stock Price
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Daily Change
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Daily % Change
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Volume
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Avg Volume (3 months)
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Market Cap.
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    P/E Ratio
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  ></th>
                </tr>
              </thead>
              <tbody>{this.generateRows(companies)}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

MyCardTable.defaultProps = {
  color: "light",
};

MyCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
