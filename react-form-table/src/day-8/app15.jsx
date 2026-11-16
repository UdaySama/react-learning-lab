import React, { useState } from "react";

function app15() {
  const [count, setCount] = useState(0);
  return (
    <div>
      APP 15 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Count button double clicks</h3>
      <hr />
      <br />
      <br />
      <br />
      <button onDoubleClick={() => setCount(count + 1)}>Double Click Me</button>
      <p>{count}</p>
    </div>
  );
}

export default app15;
