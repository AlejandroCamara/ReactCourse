import React from "react";

// Stateless or Presentation component
const person = props => {
  // Only single line statements or function calls inside {}
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
