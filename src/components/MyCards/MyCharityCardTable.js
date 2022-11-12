import React from "react";
import PropTypes from "prop-types";

// components

export default function MyCharityCardTable({ color }) {
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
                Charities
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          
          <section className="pb-20 bg-blueGray-200 -mt-70">
          <div className="container mx-auto px-4 pt-100">
            <div className="flex flex-wrap">

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="mb-5">
                    <img src={require("assets/img/charity-logo.jpeg").default} alt="logo " style={{
                      minHeight: 50,
                      maxHeight: 60,
                      alignSelf: 'center'
                    }}/>
                    </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Open Your Heart To Those In Need.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                SFIDA connects nonprofits, donors, and companies in nearly every country in the world. We help fellow nonprofits access the funding, tools, training, and support they need to serve their communities.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                We’ve partnered with nonprofits in 175+ countries who work on the ground and post the projects that their communities really need. Want to post your project?
                </p>
                <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Apply
              </button>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    src={require("assets/img/charity.jpeg").default}
                    className="w-full align-middle rounded-t-lg"
                    alt="Thumbnail"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Our Slogan
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    A Little Help Can Make A Big Change.
                                        </p>
                  </blockquote>
                </div>
              </div>
            </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="mb-5">
                    <img src={require("assets/img/charity1.png").default} alt="Program 1" style={{
                      maxHeight: 150,
                      alignSelf: 'center'
                    }}/>
                    </div>
                    <h6 className="text-xl font-semibold">Union of Concerned Scientists</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    UCS maintains a national network of nearly 17000 scientists who believe “rigorous analysis is the best way to understand the world’s pressing problems and develop effective solutions to them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 min-h-10 flex-auto">
                  <div className="mb-5">
                    <img src={require("assets/img/charity2.png").default} alt="Program 2" style={{
                      maxHeight: 150,
                      alignSelf: 'center'
                    }}
                    />
                    </div>
                    <h6 className="text-xl font-semibold">Environmental Working Group</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    EWG is known for researching and spreading awareness regarding toxic chemicals, sustainable versus exploitative agricultural practices, consumer product safety, and corporate accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <img src={require("assets/img/charity3.jpeg").default} alt="Program 3" style={{
                      maxHeight: 150,
                      minHeight: 150,
                      alignSelf: 'center'
                    }}
                    />
                    <h6 className="text-xl font-semibold">Greenpeace Fund</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Greenpeace has not lost its passionate idealism, maintains its corporate integrity, and still inspires many to urgent, hopeful direct action.
                    </p>
                  </div>
                </div>
              </div>
            
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <img src={require("assets/img/charity4.png").default} alt="Program 4" style={{
                      maxHeight: 150,
                      alignSelf: 'center'
                    }}
                    />
                    <h6 className="text-xl font-semibold">Friends of the Earth</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Friends of the Earth describes itself as a “bold and fearless voice for justice and the planet”. Recent campaigns have targeted bee-killing neonicotinoid pesticides, “dirty” tar sands oil extraction, and the environmental devastation of palm oil production.</p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 min-h-10 flex-auto">
                  <img src={require("assets/img/charity5.png").default} alt="Program 5" style={{
                      maxHeight: 150,
                      minHeight: 150,
                      alignSelf: 'center'
                    }}
                    />
                    <h6 className="text-xl font-semibold">Rainforest Alliance</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Rainforest Alliance has gained public recognition with their independent certification of common rainforest products, such as chocolate, coffee, bananas, and tea. Producers must meet strict sustainability standards to gain certification.                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12  px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <img src={require("assets/img/charity6.png").default} alt="Program 6" style={{
                      maxHeight: 150,
                      alignSelf: 'center'
                    }}
                    />
                    <h6 className="text-xl font-semibold">Earthjustice</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Earthjustice has become an independent crusade focusing on high-impact, precedent-setting battles. These are dedicated, experienced lawyers taking on the David-and-Goliath fights many of us feel powerless to influence.                     </p>
                  </div>
                </div>
              </div>
              </div>

          </div>
        </section>
        </div>
      </div>
    </>
  );
}

MyCharityCardTable.defaultProps = {
  color: "light",
};

MyCharityCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
