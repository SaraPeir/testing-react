import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      ficcionBooks: []
    };
  }

  render() {    
    return (
      <div className="App">
        <h1>Hola!</h1>
      </div>
    )
  }
}

export default App;