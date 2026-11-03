import React from "react";

function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Test7() {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Test7;
