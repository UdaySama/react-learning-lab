import React, { useState } from "react";

function App9() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  function displayText() {
    const newCount = count + 1;
    setCount(newCount)
    if (newCount === 1) {
      setText("Hello  World");
    } else if (newCount === 2) {
      setText("Welcome to React");
    } else {
      setText("");
      setCount(0)
    }
  }
  return (
    <div>
      <hr />
      <h2>APP 9 | Day 10</h2>
      <hr />
      <br />
      <br />
      <br />
      <h1>{text}</h1>
      <button onClick={displayText}>Click</button>
    </div>
  );
}

export default App9;
