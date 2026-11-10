import React, { useState } from "react";

function app5() {
  const [color, setColor] = useState("white");

  return (
    <div>
      APP 5 | Day 8
      <hr />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: color, padding: "20px" }}>Hello</div>
      <button onClick={() => setColor("red")}>Change Color</button>
    </div>
  );
}

export default app5;
