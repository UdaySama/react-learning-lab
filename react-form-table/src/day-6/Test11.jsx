import React, { useState } from "react";

function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello Parent")}>Send Message</button>
  );
}

function Test11() {
  const [message, setMessage] = useState("");
  function getMessage(data) {
    setMessage(data);
  }
  return (
    <div>
      <Child sendMessage={getMessage} />
      <h2>{message}</h2>
    </div>
  );
}

export default Test11;
