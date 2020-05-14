import React, { Component } from 'react';
import './app.scss';
import Home from './Home';
import About from './About';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
