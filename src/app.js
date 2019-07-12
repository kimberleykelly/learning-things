import "./style.scss";
import Fruit from "../src/fruit";
import Counter from "./counter";
import React from "react";
import RandomOne from "../assets/sounds/random-one.wav";
import RandomTwo from "../assets/sounds/random-two.wav";
import RandomThree from "../assets/sounds/random-three.wav";
import RandomFour from "../assets/sounds/random-four.wav";
import RandomFive from "../assets/sounds/random-five.wav";
import RandomSix from "../assets/sounds/random-six.wav";
import connectToFlux from "./connectToFlux";
class App extends React.Component {
  componentDidMount() {
    this.props.requestClickCounts();
  }
  render() {
    return (
      <div className="app-layout">
        <button
          className="update-server-btn"
          onClick={() =>
            this.props.updateServerCommand({
              bananaClicks: this.props.bananaClicks,
              pineappleClicks: this.props.pineappleClicks
            })
          }
        >
          Update Server
        </button>
        <Counter
          bananaCount={this.props.bananaClicks}
          pineappleCount={this.props.pineappleClicks}
          onIncrement={() => this.props.onIncrement()}
          onDecrement={() => this.props.onDecrement()}
        />
        <div className="fruit-container">
          <Fruit
            fruitType="pineapple"
            text="Fun Fact: When you eat me, I eat you"
            className="spin-me-btn"
            rotationStart={0}
            rotationStep={50}
            sounds={[
              RandomOne,
              RandomTwo,
              RandomThree,
              RandomFour,
              RandomFive,
              RandomSix
            ]}
            rotationType={"rotate"}
          />
          <Fruit
            fruitType="banana"
            text="Fun Fact: A man in India once ate 81 bananas in half an hour"
            className="change-color-btn"
            rotationStart={0}
            rotationStep={50}
            sounds={[
              RandomOne,
              RandomTwo,
              RandomThree,
              RandomFour,
              RandomFive,
              RandomSix
            ]}
            rotationType={"hue-rotate"}
          />
        </div>
      </div>
    );
  }
}

const queries = {
  pineappleClicks: "userStore.pineappleClicks",
  bananaClicks: "userStore.bananaClicks"
};
const commands = {
  onIncrement: "userStore.increment",
  onDecrement: "userStore.decrement",
  requestClickCounts: "userStore.requestClickCounts",
  updateServerCommand: "userStore.updateServerCommand"
};

export default connectToFlux(queries, commands)(App);
