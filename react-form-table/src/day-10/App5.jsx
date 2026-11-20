import React, { useState } from "react";

function App5() {
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
  const [color, setColors] = useState("");
  const [count, setCount] = useState(0);
  function displayColors() {
    // const newCount = count + 1;
    // setCount(newCount);
    // if (newCount > colors.length) {
    //   setColors("");
    //   setCount(0);
    // } else {
    //   setColors(colors[newCount - 1]);
    //   setCount(newCount);
    // }
    const newCount = (count + 1) % (colors.length + 1);
    setCount(newCount);
    setColors(newCount === 0 ? "" : colors[newCount - 1]);
  }
  return (
    <div>
      <hr />
      <h2 style={{ textAlign: "center" }}> APP 5 | Day 10</h2>
      <hr />
      <br />
      <br />
      <br />
      <h1>
        {color} : {count}
      </h1>
      <button onClick={displayColors}>Click</button>
    </div>
  );
}

export default App5;
