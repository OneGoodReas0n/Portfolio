import React, { Component } from 'react';
import './app.scss';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}

export default App;
