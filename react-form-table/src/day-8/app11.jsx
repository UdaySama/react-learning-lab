import React, { useState } from "react";

function app11() {
  const [list, setList] = useState(["HTML", "Python", "Javascript"]);
  const deleteItem = (idx) => {
    setList(list.filter((item, i) => i !== idx));
  };
  return (
    <div>
      APP 11 | Day 8
      <hr />
      <h3 style={{ textAlign: "center" }}>Delete an item from a list</h3>
      <hr />
      <br />
      <br />
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default app11;
