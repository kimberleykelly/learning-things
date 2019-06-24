import "./style.scss";
import Fruit from "../src/fruit";
import React from "react";
import RandomOne from "../assets/sounds/random-one.wav";
import RandomTwo from "../assets/sounds/random-two.wav";
import RandomThree from "../assets/sounds/random-three.wav";
import RandomFour from "../assets/sounds/random-four.wav";
import RandomFive from "../assets/sounds/random-five.wav";
import RandomSix from "../assets/sounds/random-six.wav";

class App extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <Fruit
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
    );
  }
}

export default App;
