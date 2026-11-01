import React from "react";

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Test1(props) {
  return <Child name="Uday" />;
}

export default Test1;
