import React from "react";

// components

export default function MyCardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center pb-12">
              <div className="relative">
                <img
                  alt="..."
                  src="https://images.squarespace-cdn.com/content/v1/59b0336be45a7ce9a7143491/1510272559813-3EWUKH31XOKL1Y0PSOPS/Apple+logo+square.png?format=2500w"
                  className="bg-white shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="text-center mt-20 ">
              <h3 className="text-xl font-semibold leading-normal mt-6 mb-2 text-blueGray-700 mb-2">
                Apple Inc.
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 ">
                <i className="fas fa-industry mr-2 text-lg text-blueGray-400"></i>
                Consumer electronics, software and online services
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-money-check-alt mr-2 text-lg text-blueGray-400"></i>
                Market cap $2.782 Trillion
              </div>
            </div>
            <div className="mt-5 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Apple Inc. is an American multinational technology company
                    that specializes in consumer electronics, software and
                    online services. Apple is the largest information technology
                    company by revenue (totaling US$365.8 billion in 2021)
                  </p>
                  <a
                    href="https://www.apple.com/"
                    className="font-normal text-lightBlue-500"
                  >
                    Visit apple.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
