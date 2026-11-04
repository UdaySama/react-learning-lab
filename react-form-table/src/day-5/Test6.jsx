import React, { useState } from "react";

function Test6() {
  const [search, setSerach] = useState("");
  const names = ["Amey", "Aman", "Sanmathi", "Siddhath", "Parvej"];
  const filterNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      Day - 5 | Test - 6
      <br />
      <br />
      <hr />
      <br />
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSerach(e.target.value)}
      />
      <br />
      {filterNames.map((name, indx) => (
        <p key={indx}>{name}</p>
      ))}
    </div>
  );
}

export default Test6;
