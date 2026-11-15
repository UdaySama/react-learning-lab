import React, { useState } from "react";

function app14() {
  const [city, setCity] = useState("");
  return (
    <div>
      APP 14 | Day 8
      <hr />
      <hr />
      <h3 style={{ textAlign: "center" }}>Show selected dropdown value </h3>
      <hr />
      <br />
      <br />
      <br />
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Goa">Goa</option>
      </select>
      <br />
      <p> selected City:- {city}</p>
    </div>
  );
}

export default app14;
