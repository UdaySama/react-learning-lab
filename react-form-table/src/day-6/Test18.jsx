import React, { useState } from "react";

function Test18() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";
  async function getUser() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      setError("");
    } catch (err) {
      setError("Something went Wrong!");
    }
  }
  return (
    <div>
      <button onClick={getUser}>get users</button>
      {error && <p>{error}</p>}

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Test18;
