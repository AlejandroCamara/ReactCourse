// *************** App.js file using hooks *************

// Needs to be imported in order to translate JSX into plain JS
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const personsInitialState = [
  { name: "Max", age: "28" },
  { name: "Camara", age: "22" },
  { name: "Hee Hee", age: "35" }
];

// Statefull component
const AppHooks = props => {
  // The state can be divided in several objects or in a monolith
  // Each object can have its own 'useState' reducer
  const [personsState, setPersonsState] = useState(personsInitialState);
  const [otherState, setOtherState] = useState("Other state Value");

  const switchNameHandler = () => {
    // Modifying 'persons' doesn´t affects 'otherState'
    setPersonsState([
      { name: "Maximus", age: "28" },
      { name: "Camara", age: "23" },
      { name: "Aiuwoki", age: "35" }
    ]);
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState[0].name} age={personsState[0].age} />
      <Person name={personsState[1].name} age={personsState[1].age}>
        My hobbies: Videogames
      </Person>
      <Person name={personsState[2].name} age={personsState[2].age} />
      <div>
        <p>{otherState}</p>
      </div>
    </div>
  );
};

export default AppHooks;
