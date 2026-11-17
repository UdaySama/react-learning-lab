import React, { useState } from "react";

function App10() {
  const [text,setText]=useState("")
  function displayText(){
    setText('Hello  World')
  }
  return (
    <div>
      <hr />
      <h2>APP 10 | Day 10</h2>
      <hr />
      <br />
      <br />
      <br />
      <h1>{text}</h1>
      <button onClick={displayText}>Click</button>
    </div>
  );
}

export default App10;
