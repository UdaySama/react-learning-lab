import React, { useState } from "react";

export default function test1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
