import React, { Component } from 'react';
import './app.scss';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    addEventListener('scroll', () => {
      const height = window.pageYOffset;
      if (height > window.innerHeight * 1.6 && height < window.innerHeight * 2.4) {
        const skills = document.getElementById('skills-list');
        skills.classList.add('animate');
      }
      if (height > window.innerHeight * 2.6) {
        const projects = document.getElementById('projects-list');
        projects.classList.add('animate');
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
