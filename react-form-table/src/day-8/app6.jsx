import React, { useState } from "react";

function app6() {
  const [text, setText] = useState("Hello World");

  return (
    <div>
      APP 6 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Change text</h3>
      <hr />
      <br />
      <br />
      <br />
      <h2>{text}</h2>
      <button onClick={() => setText("Welcome TO ReactJS")}>Click Me</button>
    </div>
  );
}

export default app6;
