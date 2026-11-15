import React, { useState } from "react";

function app12() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
  };
  return (
    <div>
      APP 12 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Add items to a list</h3>
      <hr />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {list.map((val, idX) => (
          <li key={idX}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default app12;
