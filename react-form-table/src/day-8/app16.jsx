import React, { useState } from "react";

function app16() {
  const [terms, setTerms] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = () => {
    if (terms) {
      setResult("Accepted");
    } else {
      setResult("Please accept terms");
    }
  };
  return (
    <div>
      APP 16 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Checkbox validation</h3>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="checkbox"
        checked={terms}
        onChange={(e) => setTerms(e.target.value)}
      />
      <label>Accept terms</label>
      <button onClick={handleSubmit}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default app16;
