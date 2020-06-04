import React, { Component } from 'react';
import '../../styles/style.scss';
import '../../styles/fonts.scss';
import '../../styles/variables.scss';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

class App extends Component {
   constructor() {
      super();
   }

   componentDidMount() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
         anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth',
            });
         });
      });
   }

   render() {
      return (
         <div className="app">
            <Home />
            <About />
            <Skills />
            <Projects />
         </div>
      );
   }
}

export default App;
