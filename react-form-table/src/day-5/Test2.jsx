import React from "react";
function Child(props) {
  return <h2>Hello {props.name}</h2>;
}

function Test2() {
  return (
    <div>
      Day - 5 | Test - 2
      <br />
      <hr />
      <br />
      <Child name="Amey" />
    </div>
  );
}

export default Test2;
