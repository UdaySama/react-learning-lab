import React, { useState } from 'react'

function App4() {
    const [city,setCity]=useState("")

  return (
    <div>
       App 4 | Day 7
      <br />
      <hr />
      <br />
      <select value={city} onChange={(e)=>setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Nashik">Nashik</option>
        <option value="Borgav">Borgav</option>
        <option value="Kalamb">Kalamb</option>

      </select>
      <h3>selected City:- {city}</h3>
    </div>
  )
}

export default App4
