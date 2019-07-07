import React from "react";

const person = () => {
  // Only single line statements or function calls inside {}
  return (
    <p>I'm a Person {Math.floor(Math.random() * 30)}</p>
  );
};

export default person;