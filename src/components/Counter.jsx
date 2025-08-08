import React from "react";

function Counter({ count, increment, decrement, addNumber }) {
  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="add-btn" onClick={addNumber} disabled={count === 0}>
        Add to List
      </button>
    </div>
  );
}

export default Counter;
