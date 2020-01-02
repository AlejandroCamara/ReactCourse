import React from "react";

// Stateless or Presentation component
const person = props => {
  // Only single line statements or function calls inside {}
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
