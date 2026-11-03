import React from "react";

function Employee(props) {
  return (
    <div>
      <h2>{props.employee.name}</h2>
      <p>Role: {props.employee.role}</p>
      <p>Salary: {props.employee.salary}</p>
    </div>
  );
}

function Test4() {
  const employee = {
    name: "Sidharth",
    role: "SDE",
    salary: 3000,
  };
  return (
    <div>
      <Employee employee={employee} />
    </div>
  );
}

export default Test4;
