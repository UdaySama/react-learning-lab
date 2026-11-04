import React, { useState } from "react";

function Test9() {
  const [show, setShow] = useState(false);

  return (
    <div>
      Day - 5
      <br />
      <hr />
      <br />
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default Test9;
