import React from "react";

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

export default Counter;
