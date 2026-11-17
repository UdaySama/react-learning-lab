import React, { useState } from "react";

function app20() {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      APP 20 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Change input background on focus</h3>
      <hr /> <br />
      <br />
      <br />
      <input
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(fale)}
        style={{ backgroundColor: focused ? "lightblue" : "white" }}
      />
    </div>
  );
}

export default app20;
