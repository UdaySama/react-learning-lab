import React, { useState } from 'react'

function App2() {
    const [open,setOpen] = useState(false)

  return (
    <div>
       App 2 | Day 7
      <br />
      <hr />
      <br />
      <button onClick={()=>setOpen(true)}>Open</button>
      {
        open && (
            <div>
                <h2>
                    This Is Model
                </h2>
                <p>Welcome to React</p>
                <button onClick={()=>setOpen(false)}>Close</button>
            </div>
        )
      }
    </div>
  )
}

export default App2
