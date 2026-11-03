import React from "react";

function UserStatus({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}</div>
  );
}

function Test10() {
  return (
    <div>
      <UserStatus isLoggedIn={true} />
      <UserStatus isLoggedIn={false} />
    </div>
  );
}

export default Test10;
