import React, { useEffect, useState } from "react";

function Test7() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      Day - 5 | Test - 7
      <br />
      <hr />
      <br />
      <h2>User List</h2>
      {user.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Test7;
