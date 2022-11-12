import React from "react";
import axios from "axios";

// components

import MyCardTable from "components/MyCards/MyCardTable.js";
import MyNews from "../../components/MyCards/MyNews";

import MyCardStats from "components/MyCards/MyCardStats.js";

import usflag from "../../assets/img/united-states-2.png";
import jpnflag from "../../assets/img/japan.png";
import gbtflag from "../../assets/img/united-kingdom.png";
import hkflag from "../../assets/img/hong-kong.png";

export default class MyDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      topCount: 10,
    };
  }

  fetchData() {
    axios({ method: "GET", url: `/dashboard${this.state.topCount}` })
      .then((res) => res.data)
      .then((data) => data.companies)
      .then((companies) => {
        this.setState({ companies: companies });
      }).catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap pb4">
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <MyCardStats
              statSubtitle="S&P 500"
              statTitle="4,423.25 USD"
              statArrow="up"
              statPercent="2.44"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIcon={usflag}
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <MyCardStats
              statSubtitle="HSI"
              statTitle="23,550.08 HKD"
              statArrow="down"
              statPercent="1.08"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIcon={hkflag}
              statIconColor="bg-orange-500"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <MyCardStats
              statSubtitle="NIKKEI 225"
              statTitle="26,670.00 JPY"
              statArrow="down"
              statPercent="0.15"
              statPercentColor="text-red-500"
              statDescripiron="Since yesterday"
              statIcon={jpnflag}
              statIconColor="bg-pink-500"
            />
          </div>
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <MyCardStats
              statSubtitle="FTSE 100"
              statTitle="7,467.07 GBP"
              statArrow="down"
              statPercent="1.17"
              statPercentColor="text-red-500"
              statDescripiron="Since last month"
              statIcon={gbtflag}
              statIconColor="bg-lightBlue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full lg:w-12/12 xl:w-12/12 px-4">
            <div className="shadow-lg text-center bg-white rounded py-2">
              Most Active Companies
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full lg:w-6/12 xl:w-4/12 p-4">
            <div
              className={
                (this.state.topCount === 10
                  ? "bg-light-purple white "
                  : "bg-white grow ") + "shadow-lg text-center rounded p-4"
              }
              onClick={() => {
                this.setState({ topCount: 10 });
                this.fetchData();
              }}
            >
              Top - 10
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-4/12 p-4">
            <div
              className={
                (this.state.topCount === 30
                  ? "bg-light-purple white "
                  : "bg-white grow ") + "shadow-lg text-center rounded p-4"
              }
              onClick={() => {
                this.setState({ topCount: 30 });
                this.fetchData();
              }}
            >
              Top - 30
            </div>
          </div>
          <div className="w-full lg:w-6/12 xl:w-4/12 p-4">
            <div
              className={
                (this.state.topCount === 50
                  ? "bg-light-purple white "
                  : "bg-white grow ") + "shadow-lg text-center rounded p-4"
              }
              onClick={() => {
                this.setState({ topCount: 50 });
                this.fetchData();
              }}
            >
              Top - 50
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <MyCardTable title="Companies" items={this.state.companies} />
          </div>
          <div className="w-full mb-12 px-4">
            <MyNews />
          </div>
        </div>
      </>
    );
  }
}
