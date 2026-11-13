import React, { useState } from "react";

function app10() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    if (name.trim() === "") {
      setResult("Please enter your name");
    } else {
      setResult("Welcome " + name);
    }
  };
  return (
    <div>
      APP 10 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Validate empty input</h3>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}

      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default app10;
