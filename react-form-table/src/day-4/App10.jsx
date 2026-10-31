import React, { useState } from "react";

function App10() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering in React</h1>
      <div>
        {isLoggedIn ? <h1>Welcome,User!</h1> : <h1>Please Log In</h1>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
}

export default App10;
