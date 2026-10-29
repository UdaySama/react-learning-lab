import React, { useState } from "react";

function App1() {
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(name);
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App1;
