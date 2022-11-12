import React, { Component } from "react";

export default class MyKPICard extends Component {
  render() {
    const title = this.props.title;
    const value = this.props.value;
    const date = this.props.date;

    return (
      <>
        <div className="relative flex flex-1 flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h4 className="text-blueGray-800 uppercase text-xs">{title}</h4>
                <h1 className="font-semibold text-2xl text-blueGray-700">
                  {value}
                </h1>
              </div>
            </div>
            <p className="text-xs text-blueGray-400 mt-4">
              <span className="whitespace-nowrap">{date}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
