import React from 'react'

function App9() {
  const text = "Hello ReactJS"
  const copyText = async () =>{
    await navigator.clipboard.writeText(text);
    alert("Copied Successsfully")
  }
  return (
    <div>
       App 9 | Day 7 | Add a Copy-to-Clipboard Button
      <br /><br />
      <hr />
      <br /><br />
      <p>{text}</p>
      <button onClick={copyText}>Copy</button>
    </div>
  )
}

export default App9
