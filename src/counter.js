import React from "react";
import connectToFlux from "./connectToFlux";

class Counter extends React.Component {
  render() {
    const {
      bananaCount,
      pineappleCount,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <div className="counter">Pineapple Count:{pineappleCount}</div>
        <div className="counter">Banana Count:{bananaCount}</div>
        <div className="counter-btns">
          <button onClick={onDecrement} className="counter-btns-minus">
            -
          </button>
          <button onClick={onIncrement} className="counter-btns-plus">
            +
          </button>
        </div>
      </div>
    );
  }
}

const queries = {};
const commands = {};

export default connectToFlux(queries, commands)(Counter);
