// *************** App.js file using traditional classes *************

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class AppClass extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Camara", age: "22" },
      { name: "Hee Hee", age: "35" }
    ]
  };

  // Needs to be written as a class property to allow 'this' keyword
  // refer to the class, instead the function.
  switchNameHandler = newName => {
    console.log("Was clicked!");
    // Don't change the state directly!!!
    // this.state.persons[0].name = "Maximus";

    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "Camara", age: "23" },
        { name: "Aiuwoki", age: "35" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: "28" },
        { name: "Camara", age: "23" },
        { name: "Aiuwoki", age: "35" }
      ]
    });
  };

  // Inline CSS style
  buttonStyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid purple",
    padding: "8px",
    cursor: "pointer"
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {
          // Send a function with parameters to another component with bind
        }
        <button
          style={this.buttonStyle}
          onClick={this.switchNameHandler.bind(this, "Jojo")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          // onClick function
          click={this.switchNameHandler.bind(this, "Maximus")}
          // onChange function
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Videogames
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default AppClass;
