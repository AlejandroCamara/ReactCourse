// *************** App.js file using hooks *************

// Needs to be imported in order to translate JSX into plain JS
import React from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  // JSX notation
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person />
      <Person />
      <Person />
    </div>
  );

  // Plain JavaScript translation
  // return React.createElement('div', {className: 'App'}, 
  //   React.createElement('h1', null, "Hi, I'm a React App"));
}

export default App;
