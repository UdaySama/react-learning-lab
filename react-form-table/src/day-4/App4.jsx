import React, { useState } from "react";

function App4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Component with useState</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Count:- {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App4;
