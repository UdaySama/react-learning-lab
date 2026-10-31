import React, { useState } from "react";

function App8() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1> a program to create a counter with increment and decrement</h1>

      <br />
      <br />
      <p style={{ fontSize: "24px", margin: "20px" }}>
        Count:-
        <span
          style={{
            fontSize: "24px",
            margin: "20px",
            padding: "10px",
            border: "1px white solid",
          }}
        >
          {count}
        </span>
      </p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App8;
