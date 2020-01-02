import React from "react";
import "./Person.css";

// Stateless or Presentation component
const person = (props) => {
  // Only single line statements or function calls inside {}
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
