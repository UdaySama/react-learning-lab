import React, { useState } from "react";

function App6() {
  const [dark, setDark] = useState(false);
  const styles = {
    background: dark ? "#222" : "#fff",
    color: dark ? "#fff" : "#222",
    padding: "30px",
  };
  return (
    <div style={styles}>
      App 6 | Day 7
      <br />
      <hr />
      <br />
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
    </div>
  );
}

export default App6;
