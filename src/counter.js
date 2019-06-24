import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0
    };
  }

  incrementByOne() {
    const { start } = this.state;
    this.setState({
      start: start + 1
    });
  }

  decrementByOne() {
    const { start } = this.state;
    this.setState({
      start: start - 1
    });
  }

  render() {
    return (
      <div>
        <div className="counter">Count:{this.state.start}</div>
        <div className="counter-btns">
          <button
            onClick={() => this.decrementByOne()}
            className="counter-btns-minus"
          >
            -
          </button>
          <button
            onClick={() => this.incrementByOne()}
            className="counter-btns-plus"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
