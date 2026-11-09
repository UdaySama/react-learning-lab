import React, { useState } from "react";

function App10() {
  const [number, setNumber] = useState(0);
  const generate = () => {
    setNumber(Math.floor(Math.random() * 1000) + 1);
  };
  return (
    <div>
      App 10 | Day 7 | Random Number Generator
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h2>Number:- {number}</h2>
      <button onClick={generate}>Genrate</button>
    </div>
  );
}

export default App10;
