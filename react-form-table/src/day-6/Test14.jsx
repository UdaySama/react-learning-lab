import React, { useState } from "react";

function Test14() {
  const [user, setUser] = useState([]);
  async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUser(data);
  }
  return (
    <div>
      <button onClick={getUser}>Get User</button>
      {user.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Test14;
