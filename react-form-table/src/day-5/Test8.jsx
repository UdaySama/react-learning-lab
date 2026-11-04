import React, { useState } from "react";

function Test8() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };
  const deleteTodo = (idX) => {
    setTodos(todos.filter((_, i) => i !== idX));
  };
  return (
    <div>
      Day - 5 | Test - 8<h1>Todo List App</h1>
      <br />
      <hr />
      <br />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span>{todo}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Test8;
