import React, { Component } from "react";
import MyNewsCard from "./MyNewsCard";

export default class MyNews extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
        process.env.REACT_APP_NEWS_API_KEY
    )
      .then((response) => response.json())
      .then((object) => object.articles)
      .then((fetchednews) => {
        if (fetchednews) this.setState({ news: fetchednews });
      })
      .catch(console.log);
  }

  generateNews() {
    let news = [];
    const limit = Math.min(6, this.state.news.length);
    for (let i = 0; i < limit; i++) {
      news.push(<MyNewsCard news={this.state.news[i]} key={i} />);
    }
    return news;
  }

  render() {
    const color = "light";
    return (
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 bg-white">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                News
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto bg-transparent">
          <div className="flex flex-wrap">{this.generateNews()}</div>
        </div>
      </div>
    );
  }
}
