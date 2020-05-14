import React, { Component } from 'react';
import './home.scss';
import Navbar from '../../../components/Navbar';
import Greetings from '../../../components/Greetings';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <Greetings />
      </div>
    );
  }
}

export default Home;
