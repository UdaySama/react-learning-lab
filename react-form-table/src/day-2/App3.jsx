import React, { useState } from "react";

function App3() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>
      <br />

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Minu
      </button>
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <br />

      <p>count:- {count}</p>
    </div>
  );
}

export default App3;
