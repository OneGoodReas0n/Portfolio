import React, { Component } from 'react';
import './skills.scss';
import SectionTitle from '../../../components/SectionTitle';
import SkillsList from '../../../components/SkillsList';

class Skills extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <section className="section-outer section-skills" id="skills">
            <div className="section-inner">
               <SectionTitle text="skills" />
               <SkillsList />
            </div>
         </section>
      );
   }
}

export default Skills;
