import React from 'react'

function User({name}){
    return <h2>{name.toUpperCase()}</h2>
}


function Test13() {
  return (
    <div>
      <User name="Uday Kojo"/>
    </div>
  )
}

export default Test13
