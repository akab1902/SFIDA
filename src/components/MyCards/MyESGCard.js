import React from "react";

// components

export default function MyESGCard(props) {
  const esg = props.esg;
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-bold text-lg  text-blueGray-700">
                ESG - Score
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Performance
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-left">
                  Environmental
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  Remarkable
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{esg.E}</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: (esg.E + "%"), }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-left">
                  Social
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  Remarkable
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{esg.S}</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: (esg.S + "%"), }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4 text-left">
                  Governance
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  Excellent
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-m whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{esg.G}</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                        <div
                          style={{ width: (esg.G + "%"), }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
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
    </>
  );
}
