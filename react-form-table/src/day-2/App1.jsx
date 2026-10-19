import React, { useState } from "react";

function App1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmitteData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitteData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:-</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email:-</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
<br />
      {submittedData && (
        <>
          <p>Submitted Successfully!</p>
          <p>
            Name:- {submittedData.name}
            <br />
            Email:- {submittedData.email}
          </p>
        </>
      )}
    </div>
  );
}

export default App1;
