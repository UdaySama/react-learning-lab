import React, { useState } from "react";

function app7() {
  const [color, setColor] = useState("black");
  return (
    <div>
      APP 7 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Change text color on mouseover</h3>
      <hr />
      <br />
      <br />
      <br />
      <h2
        onMouseOver={() => setColor("red")}
        onMouseOut={() => setColor("black")}
        style={{ color: color, cursor: "pointer" }}
      >
        Hover me
      </h2>
    </div>
  );
}

export default app7;
