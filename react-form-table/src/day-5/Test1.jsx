import React, { useState } from "react";

function Test1() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const addTask = () => {
    if (input.trim() === "") return "";
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      Day - 5
      <hr />
      <h1>To-DO Application</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "8px 12px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          outline: "none",
          width: "250px",
        }}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <span
              onClick={() => toggleComplete(task.id)}
              style={{ cursor: "pointer" }}
            >
              {" "}
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test1;
