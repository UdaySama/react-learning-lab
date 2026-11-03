import React from "react";

function Message({ show, name }) {
  return (
    <div>
      {show && 
        <div>
          <h2>Hello React Develoepr!</h2> <p>{name}</p>
        </div>
      }
    </div>
  );
}

function Test12() {
  return (
    <div>
      <Message show={false} name={"Uday"} />
      <Message show={true} name={"Amey"} />
    </div>
  );
}

export default Test12;
