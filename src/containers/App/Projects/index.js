import React, { Component } from 'react';
import './projects.scss';
import SectionTitle from '../../../components/SectionTitle';
import ProjectsList from '../../../components/ProjectsList';
import Footer from '../../../components/Footer';

class Projects extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <section className="section-outer section-projects" id="projects">
            <div className="section-inner">
               <SectionTitle text="projects" />
               <ProjectsList />
               <Footer />
            </div>
         </section>
      );
   }
}

export default Projects;
