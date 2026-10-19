import React, { useState } from "react";

function App2() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const handleDelete = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add Task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
