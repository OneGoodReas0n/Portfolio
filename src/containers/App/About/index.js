import React, { Component } from 'react';
import './about.scss';
import SectionTitle from '../../../components/SectionTitle';

class About extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <section className="section-outer section-about" id="about">
            <div className="section-inner">
               <SectionTitle text="about" />
               <div className="section-about-content">
                  <div className="section-about-wrapper">
                     <div className="section-about-wrapper__text">
                        My name is{' '}
                        <span className="purple">
                           <b>Illia</b>
                        </span>{' '}
                        and i am self-educated programmer with a passion for{' '}
                        <span className="light-blue">
                           <b>React</b>
                        </span>{' '}
                        and{' '}
                        <span className="dark-blue">
                           <b>Automatization</b>
                        </span>{' '}
                        features.
                     </div>
                     <div className="section-about-wrapper__text">
                        And i am searching for my first real product experience.
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
