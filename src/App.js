import React, { Component } from 'react';
// import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      ficcionBooks: []
    };
  }

  render() {
      const num1 = 1;  
      const num2 = 2;  
      const calculatedValue = num1 + num2; 
    return (
      <div className="App">
        <h1 id="greeting" className="red-text">Hola!</h1>
        <h3 id="eng-greeting">Hello!</h3>
        <p id="calculated-value">{calculatedValue}</p>
      </div>
    )
  }
}

export default App;