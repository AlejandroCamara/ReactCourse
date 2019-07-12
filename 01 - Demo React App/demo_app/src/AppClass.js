// *************** App.js file using traditional classes *************

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Camara", age: "22" },
      { name: "Hee Hee", age: "35" }
    ]
  };

  // Needs to be written as a class property to allow 'this' keyword
  // refer to the class, instead the function.
  switchNameHandler = () => {
    console.log("Was clicked!");
    // Don't change the state directly!!!
    // this.state.persons[0].name = "Maximus";
    this.setState({
      persons: [
        { name: "Maximus", age: "28" },
        { name: "Camara", age: "22" },
        { name: "Hee Hee", age: "35" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name={this.state.persons[0]} age={this.state.persons[0]} />
        <Person name={this.state.persons[1]} age={this.state.persons[1]}>
          My hobbies: Videogames
        </Person>
        <Person name={this.state.persons[2]} age={this.state.persons[2]} />
      </div>
    );
  }
}
