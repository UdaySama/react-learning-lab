import React from "react";

function App7() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <div>
    <h1>Map</h1>
      {fruits.map((fr, idx) => (
        <li key={idx}>{fr}</li>
      ))}
    </div>
  );
}

export default App7;
