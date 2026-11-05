import React from "react";

function Child({ setData }) {
  return <button onClick={() => setData("Hello Parent")}>Send Data</button>;
}

function App1() {
  const reveiveData = (data) => {
    alert(data);
  };
  return (
    <div>
      App 1 | Day 7
      <br />
      <hr />
      <br />
      <Child setData={reveiveData} />
    </div>
  );
}

export default App1;
