import React, { useState } from "react";

export default function test2() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p>Hello World!</p>}
    </div>
  );
}
