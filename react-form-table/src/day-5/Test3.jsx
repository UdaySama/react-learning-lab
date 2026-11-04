import React, { useEffect, useState } from "react";

function Test3() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div>
      Day - 5 | Test - 3
      <br />
      <hr />
      <br />
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Test3;
