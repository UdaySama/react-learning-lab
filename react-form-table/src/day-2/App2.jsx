import React from "react";

function App2() {
  const jsonData = [
    { id: 1, name: "Amey Z", role: "Developer" },
    { id: 2, name: "Aman C", role: "Designer" },
    { id: 3, name: "Siddharth k", role: "Developer" },
  ];
  return (
    <div>
      <h2>JSON to Table</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App2;
