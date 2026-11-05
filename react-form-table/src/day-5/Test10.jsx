import React, { useState } from "react";

function Test10() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Day - 5
      <br />
      <hr />
      <br />
      <h2>Count:- {count}</h2>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Minu</button>
    </div>
  );
}

export default Test10;
