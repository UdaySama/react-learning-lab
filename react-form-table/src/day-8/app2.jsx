import React, { useState } from "react";

function app2() {
  const [name, setName] = useState("");
  return (
    <div>
      APP 2 | Day 8
      <br />
      <h3 style={{ textAlign: "center" }}>Display input value</h3>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}

export default app2;
