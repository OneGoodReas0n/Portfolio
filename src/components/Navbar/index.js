import React from 'react';
import './navbar.scss';
import Menu from '../Menu';
import Socials from '../Socials';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <Menu />
        <Socials />
      </div>
    );
  }
}

export default Navbar;
