import React, { useState } from "react";

function Test15() {
  const [users, setUser] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users/1";

  async function getUser() {
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
  }
  return (
    <div>
      <button onClick={getUser}>get User</button>
      {users && (
        <div>
          <h2>{users.name}</h2>
          <p>{users.email}</p>
          <p>{users.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default Test15;
