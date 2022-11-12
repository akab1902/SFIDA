import React, { Component } from "react";
import MyActionCard from "./MyActionCard";

export default class MyActions extends Component {
  generateSteps(steps, images) {
    let actions = [];
    // const limit = Math.min(6, this.state.news.length);
    for (let i = 0; i < steps.length; i++) {
      actions.push(<MyActionCard step={steps[i]} image={images[i]} key={i}/>);
    }
    return actions;
  }

  render() {
    const color = "light";
    const steps = this.props.steps;
    const images = [
      'https://9to5mac.com/wp-content/uploads/sites/6/2021/04/apple-carbon-free-2030.jpg?quality=82&strip=all&w=1600',
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-trade-in-202010_FMT_WHH?wid=1088&hei=590&fmt=jpeg&qlt=80&.v=1601496901000",
      'https://www.evwind.es/wp-content/uploads/2016/12/apple-inc-to-build-2-gigawatts-of-alternative-energy-projects-in-china-672x372.jpg',
      'https://www.thehindu.com/sci-tech/technology/6r3h8z/article34327047.ece/ALTERNATES/LANDSCAPE_1200/15net-Apple',
      'https://www.apple.com/v/environment/n/images/meta/og__bghpqp9r7ewi.png?202110180059',
      'https://9to5mac.com/wp-content/uploads/sites/6/2020/07/No-charger-or-EarPods-in-slim-iPhone-12-box.jpg?quality=82&strip=all&%23038;w=1500',
    ]
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
                Actions
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto bg-transparent">
          <div className="flex flex-wrap p-4">
            {this.generateSteps(steps, images)}
          </div>
        </div>
      </div>
    );
  }
}
