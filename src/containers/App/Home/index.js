import React, { Component } from 'react';
import './home.scss';
import Navbar from '../../../components/Navbar';
import Greetings from '../../../components/Greetings';

class Home extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <section className="section-outer section-home" id="home">
            <Navbar />
            <div className="section-inner">
               <Greetings />
            </div>
         </section>
      );
   }
}

export default Home;
