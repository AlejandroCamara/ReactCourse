// *************** App.js file using traditional classes *************

// Highlights:
// *  Functions need to be written as a class property to allow 'this' keyword
//    refer to the class, instead the function.
// *  Don't change the state directly!!!, use 'this.setState' instead.
// *  Use 'bind' for calling a function from an external component.

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class AppClass extends Component {
  // App state. Contains all the variables/properties used on the app
  state = {
    persons: [
      { id: "lala", name: "Max", age: "28" },
      { id: "lele", name: "Camara", age: "22" },
      { id: "lolo", name: "Hee Hee", age: "35" }
    ],
    showPersons: false
  };

  // Replaced the persons data in state.
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: "lala", name: newName, age: "28" },
        { id: "lele", name: "Camara", age: "23" },
        { id: "lolo", name: "Aiuwoki", age: "35" }
      ]
    });
  };

  // Updates the Person.name value in the state with the content of the input box
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = person;

    this.setState({
      persons: updatedPersons
    });
  };

  // Show or hide the persons list
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  // Remove a person
  deletePersonHandler = (index) => {
    // Copy the current state array to prevent editing it directly
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({ persons });
  };

  // Inline CSS style example
  buttonStyle = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid purple",
    padding: "8px",
    cursor: "pointer"
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {
          // Send a function with parameters to another component with bind
        }
        <button style={this.buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        <div></div>
      </div>
    );
  }
}

export default AppClass;
