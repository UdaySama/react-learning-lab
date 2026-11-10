import React, { useState } from "react";

function app3() {
  const [text, setText] = useState("");

  return (
    <div>
      APP 3 | Day 8
      <br />
      <h3 style={{ textAlign: "center" }}>Count characters in input</h3>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Character Count:- {text.length}</p>
    </div>
  );
}

export default app3;
