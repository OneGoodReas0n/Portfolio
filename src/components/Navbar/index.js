import React from 'react';
import './navbar.scss';
import Menu from '../Menu';
import Socials from '../Socials';
import CollapsedMenu from '../CollapsedMenu';

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
               <CollapsedMenu />
               <Socials />
            </div>
         </div>
      );
   }
}

export default Navbar;
