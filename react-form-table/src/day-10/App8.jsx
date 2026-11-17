import React, { useState } from "react";

function App8() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  function displayText() {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 1) {
      setText("Apple");
    } else if (newCount === 2) {
      setText("Banana");
    } else if (newCount === 3) {
      setText("Mango");
    } else if (newCount === 4) {
      setText("");
      setCount(0);
    } else {
      // setText("");
      setCount(1);
    }
  }
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}> APP 8 | Day 10</h2>
      <hr />
      <br />
      <br />
      <br />
      <h1>{text}</h1>
      <button onClick={displayText}>Click</button>
    </div>
  );
}

export default App8;
