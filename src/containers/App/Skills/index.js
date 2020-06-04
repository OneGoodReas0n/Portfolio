import React, { Component } from 'react';
import './skills.scss';
import SectionTitle from '../../../components/SectionTitle';
import frontendSvg from '../../../assets/images/groups/frontend.svg';
import serverSvg from '../../../assets/images/groups/server.svg';
import databaseSvg from '../../../assets/images/groups/database.svg';
import deploymentSvg from '../../../assets/images/groups/cloud.svg';
import List from '../../../components/List';

class Skills extends Component {
   constructor() {
      super();
   }

   render() {
      const skills = [
         {
            id: 1,
            title: 'Frontend',
            features: [
               'HTML5',
               'CSS3 | SASS | BEM',
               'Javascript | Typescript',
               'React | Redux',
            ],
            icon: frontendSvg,
         },
         {
            id: 2,
            title: 'Server',
            features: ['Node JS | Express', 'Java | Spring Framework'],
            icon: serverSvg,
         },
         {
            id: 3,
            title: 'Database',
            features: ['MySQL', 'MongoDB'],
            icon: databaseSvg,
         },
         {
            id: 4,
            title: 'Deployment',
            features: ['Git | Git Pages', 'Google Cloud'],
            icon: deploymentSvg,
         },
      ];
      return (
         <section className="section-outer section-skills" id="skills">
            <SectionTitle title="skills" />
            <div className="section-inner">
               <List elements={skills} listId="skills" numOfElem={3} />
            </div>
         </section>
      );
   }
}

export default Skills;
