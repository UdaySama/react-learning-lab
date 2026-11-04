import React, { useState } from "react";

function Test5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields Required");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }
    if (password.length < 0) {
      alert("Password must be 6 char");
      return;
    }
    alert("Registration successful");
  };
  return (
    <div>
      Day - 5 | Test - 5
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Test5;
