import React, { useState } from "react";

function app8() {
  const [count, setCount] = useState(0);
  return (
    <div>
      APP 8 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Decrease and Increase counter</h3>
      <hr />
      <br />
      <br />
      <br />
      <h2>Count:- {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button><br />
      <button onClick={() => setCount(0)}>Decrease</button><br />
      <button onClick={() => setCount(count + 1)}>Increase</button><br />
    </div>
  );
}

export default app8;
