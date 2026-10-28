import React, { useState } from "react";

export default function test4() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodos = () => {};
  const deleteTodo = () => setTodos(todos.filter((t) => t.id !== id));
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodos}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} <button onClick={() => deleteTodo(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
