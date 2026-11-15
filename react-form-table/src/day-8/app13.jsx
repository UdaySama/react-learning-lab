import React, { useState } from "react";

function app13() {
  const [date, setDate] = useState("");

  return (
    <div>
      APP 13 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Display current date and time</h3>
      <hr />
      <br />
      <br />
      <br />
      <button onClick={() => setDate(new Date().toLocaleString())}>
        Show Date
      </button>
      <p>{date}</p>
    </div>
  );
}

export default app13;
