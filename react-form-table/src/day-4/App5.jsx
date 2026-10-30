import React, { useState } from "react";

function App5() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: "+ name);
  };
  return (
    <div>
      <h1>forms handled in React compared to plain HTML</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App5;
