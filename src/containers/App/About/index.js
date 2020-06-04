import React, { Component } from 'react';
import './about.scss';
import SectionTitle from '../../../components/SectionTitle';
import TextContent from '../../../components/TextContent';

class About extends Component {
   constructor() {
      super();
   }

   render() {
      const textBlock1 = (
         <div className="text-wrapper__text" key="1">
            My name is{' '}
            {
               <span className="purple">
                  <b>Illia</b>
               </span>
            }{' '}
            and i am self-educated programmer with a passion for{' '}
            {
               <span className="light-blue">
                  <b>React</b>
               </span>
            }{' '}
            and{' '}
            {
               <span className="dark-blue">
                  <b> Automatization </b>
               </span>
            }
            features.
         </div>
      );
      const textBlock2 = (
         <div className="text-wrapper__text" key="2">
            And i am searching for my first real product experience.
         </div>
      );
      const children = [textBlock1, textBlock2];
      return (
         <section className="section-outer section-about" id="about">
            <SectionTitle title="about" />
            <div className="section-inner">
               <TextContent>{children}</TextContent>
            </div>
         </section>
      );
   }
}

export default About;
