import React, { useState } from "react";

function app4() {
  const [show, setShows] = useState(false);

  return (
    <div>
      APP 4 | Day 8
      <br />
      <h3 style={{ textAlign: "center" }}>Show and hide password</h3>
      <hr />
      <br />
      <br />
      <br />
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShows(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default app4;
