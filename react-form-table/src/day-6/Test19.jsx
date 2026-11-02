import React, { useEffect, useState } from "react";

function Test19() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    async function getUsers() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }
    getUsers()

  },[]);
  return (
    <div>
      {/* <button onClick={getUsers}>Get Users</button> */}
      {
        users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))
      }
    </div>
  );
}

export default Test19;
