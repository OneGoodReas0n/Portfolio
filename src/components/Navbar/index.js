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
            <div className="navbar-wrapper">
               <Menu />
               <Socials />
            </div>
         </div>
      );
   }
}

export default Navbar;
