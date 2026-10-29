import React, { useState } from "react";

function App3() {
  const [isOn, setIsON] = useState(false);
  return (
    <div>
      <h1>Toggle Component</h1>
      <button onClick={() => setIsON(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export default App3;
