import React, { Component } from 'react';
import './projects.scss';
import SectionTitle from '../../../components/SectionTitle';
import ProjectsList from '../../../components/ProjectsList';

class Projects extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="projects" id="projects">
        <SectionTitle text="projects" />
        <ProjectsList />
      </div>
    );
  }
}

export default Projects;
