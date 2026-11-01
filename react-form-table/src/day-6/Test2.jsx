import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age:- {props.age}</p>
      <p>City:- {props.city}</p>
    </div>
  );
}

function Test2() {
  return (
    <div>
      <Student name="Amey" age={25} city="Pune" />
    </div>
  );
}

export default Test2;
