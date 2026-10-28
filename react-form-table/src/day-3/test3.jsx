import React, { useState } from "react";

export default function test3() {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello. {name || "Strange"}</p>
    </div>
  );
}
