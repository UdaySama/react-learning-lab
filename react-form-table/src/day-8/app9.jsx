import React, { useState } from "react";

function app9() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "30px",
        minHeight: "100px",
      }}
    >
      APP 9 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" , color: dark ? "white" : "black", }}>Toggle dark mode</h3>
      <hr />
      <br />
      <br />
      <br />
      <h2>Dark Mode Example</h2>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default app9;
