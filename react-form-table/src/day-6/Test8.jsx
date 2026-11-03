import React from 'react'


function User({name = "Guest"}){
    return <h2>Welcome, {name}</h2>
}


function Test8() {
  return (
    <div>
      <User name="Uday"/>
      <User/>
    </div>
  )
}

export default Test8
