import React, { useState } from "react";

function App3() {
  const [text, setText] = useState("");
  return (
    <div>
      App 3 | Day 7
      <br />
      <hr />
      <br />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>Characters:- {text.length}</p>
    </div>
  );
}

export default App3;
