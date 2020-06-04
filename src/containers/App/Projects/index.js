import React, { Component } from 'react';
import './projects.scss';
import SectionTitle from '../../../components/SectionTitle';
import Footer from '../../../components/Footer';
import virtualKeyboardSvg from '../../../assets/images/projects/virtual-keyboard.svg';
import pixelDrawSvg from '../../../assets/images/projects/pixel-draw.svg';
import cloudSvg from '../../../assets/images/projects/cloud.svg';
import List from '../../../components/List';

class Projects extends Component {
   constructor() {
      super();
   }

   render() {
      const projects = [
         {
            id: 1,
            title: 'Weather Application',
            description:
               'Full Frontend stylish application for presenting weather in different locations',
            icon: cloudSvg,
            link: 'https://onegoodreas0n.github.io/weather-app/',
            git: 'https://github.com/OneGoodReas0n/weather-app',
         },
         {
            id: 2,
            title: 'Virtual Keyboard',
            description:
               'Full Frontend application-keyboard, recognize buttons from real and virtual keyboard',
            icon: virtualKeyboardSvg,
            link: 'https://onegoodreas0n.github.io/virtual-keyboard/',
            git: 'https://github.com/OneGoodReas0n/virtual-keyboard',
         },
         {
            id: 3,
            title: 'Pixel Draw',
            description:
               'Full Frontend application-editor for pixel drawing at the board',
            icon: pixelDrawSvg,
            link: 'https://onegoodreas0n.github.io/codejam-palette/',
            git: 'https://github.com/OneGoodReas0n/codejam-palette',
         },
      ];
      return (
         <section className="section-outer section-projects" id="projects">
            <SectionTitle title="projects" />
            <div className="section-inner">
               <List elements={projects} listId="projects" numOfElem={4} />
            </div>
            <Footer />
         </section>
      );
   }
}

export default Projects;
