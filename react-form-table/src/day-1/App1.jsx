import React, { useState } from "react";
import './../App.css'
function App1() {
  const [display, setDisplay] = useState("");
  const appendValue = (val) => {
    setDisplay((prev) => prev + val);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculateResult = () => {
    try {
      setDisplay(Function(`'use strict'; return (${display})`)().toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" value={display} readOnly />
        <br />
        <br />
        <div>
          <button onClick={() => appendValue("1")}>1</button>
          <button onClick={() => appendValue("2")}>2</button>
          <button onClick={() => appendValue("3")}>3</button>
          <button onClick={() => appendValue("+")}>+</button>
        </div>
        <div>
          <button onClick={() => appendValue("4")}>4</button>
          <button onClick={() => appendValue("5")}>5</button>
          <button onClick={() => appendValue("6")}>6</button>
          <button onClick={() => appendValue("-")}>-</button>
        </div>
        <div>
          <button onClick={() => appendValue("7")}>7</button>
          <button onClick={() => appendValue("8")}>8</button>
          <button onClick={() => appendValue("9")}>9</button>
          <button onClick={() => appendValue("*")}>*</button>
        </div>
        <div>
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => appendValue("0")}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => appendValue("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App1;
