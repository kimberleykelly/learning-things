import React from "react";

class Counter extends React.Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div className="counter">Count:{count}</div>
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
