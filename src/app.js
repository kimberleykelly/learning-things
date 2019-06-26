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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bananaCount: 0,
      pineappleCount: 0
    };
  }

  handleBananaClick() {
    this.setState({
      bananaCount: this.state.bananaCount + 1
    });
  }

  handlePineappleClick() {
    this.setState({
      pineappleCount: this.state.pineappleCount + 1
    });
  }

  handleIncrement() {
    this.setState({
      bananaCount: this.state.bananaCount + 1,
      pineappleCount: this.state.pineappleCount + 1
    });
  }

  handleDecrement() {
    this.setState({
      bananaCount: this.state.bananaCount - 1,
      pineappleCount: this.state.pineappleCount - 1
    });
  }

  render() {
    return (
      <div className="app-layout">
        <Counter
          bananaCount={this.state.bananaCount}
          pineappleCount={this.state.pineappleCount}
          onIncrement={() => this.handleIncrement()}
          onDecrement={() => this.handleDecrement()}
        />
        <div className="fruit-container">
          <Fruit
            onClick={() => this.handlePineappleClick()}
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
            onClick={() => this.handleBananaClick()}
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

export default App;

// NEEDS
// The count (in the header)
// A banana button that spins
// a + button
// a - button

// WE HAVE
// A banana button in one component (child of app)
// A + and - button in another component (child of app)
// A count variable in the counter component (same one as above ^)

//WE NEED
// The counter component and the fruit component to share info.
// It is not immediately obvious to me what information I need to share!!!!!!
