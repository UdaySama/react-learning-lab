import React, { useState } from "react";

function App3() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Orange"];
  const filteredItem = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search........"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItem.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App3;
