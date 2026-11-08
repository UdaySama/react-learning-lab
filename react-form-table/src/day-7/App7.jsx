import React from "react";

function App7() {
  const users = [
    {
      id: 1,
      name: "Amey",
      email: "amey@gmail.com",
      age: 23,
    },
    {
      id: 2,
      name: "Aman",
      email: "aman@gmail.com",
      age: 24,
    },
    {
      id: 3,
      name: "Sanmathi",
      email: "sanmathi@gmail.com",
      age: 22,
    },
  ];
  return (
    <div>
      App 7 | Day 7
      <br />
      <hr />
      <br />
      <h2>User Details</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App7;
