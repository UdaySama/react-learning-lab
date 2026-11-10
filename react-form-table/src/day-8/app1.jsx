import { useState } from "react";

function app1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        APP 1 | Day 8
        <hr />
        <br />
        <br />
        <br /> <button onClick={(e) => setCount(count + 1)}>Plus</button>
        <button onClick={(e) => setCount(0)}>Reset</button>
        <span>Count:- {count}</span>
        <button onClick={(e) => setCount(count - 1)}>Minus</button>
      </div>
    </div>
  );
}

export default app1;
