import React, { useState } from 'react'

function Test4() {
  const [lisked,setLinked]=useState(false)

  return (
    <div>
      Day - 5 |  Test - 4
     <br />
      <hr />
      <br />
      <button onClick={()=>setLinked(!lisked)}>
        {lisked ? "Unlike ❤️" : "Like 🤍"}
      </button>
    </div>
  )
}

export default Test4
