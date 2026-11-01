import React from 'react'

function FruitsList(props){
    return(
        <ul>
            {
                props.fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))
            }
        </ul>
    )
}


function Test3() {
    const fruits = ["Apple", "Banana", "Mango","Orange"]
  return (
    <div>
      <FruitsList fruits={fruits}/>
    </div>
  )
}

export default Test3
