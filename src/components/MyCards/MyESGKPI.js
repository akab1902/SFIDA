import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default class MyESGKPI extends Component {
  render() {
    const title = this.props.title;
    const value = this.props.value;
    const apple_esg = this.props.esg;

    return (
      <>
        <div className="relative flex flex-1 flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-3 bg-white">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h4 className="text-blueGray-800 uppercase text-lg">{title}</h4>
                <h1 className="font-semibold text-2xl text-blueGray-700">
                  {value}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-transparent">
            <div
              className="relative h-100-px p-4"
              style={{ width: "44%", marginLeft: "28%" }}
            >
              <CircularProgressbar
                value={apple_esg.ESG}
                text={`${apple_esg.ESG}`}
                styles={buildStyles({
                  pathColor: `rgba(${
                    255 - Math.floor(255 * (apple_esg.ESG / 100))
                  }, ${Math.floor(255 * (apple_esg.ESG / 100))}, 120, 1)`,
                  textColor: `rgba(${
                    255 - Math.floor(255 * (apple_esg.ESG / 100))
                  }, ${Math.floor(255 * (apple_esg.ESG / 100))}, 120, 1)`,
                  trailColor: `rgba(${
                    255 - Math.floor(255 * (apple_esg.ESG / 100))
                  }, ${Math.floor(255 * (apple_esg.ESG / 100))}, 120, 0.3)`,
                })}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
