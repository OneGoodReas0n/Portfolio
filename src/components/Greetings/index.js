import React from 'react';
import './greetings.scss';
import Btn from '../Btn';

const Greetings = () => {
   return (
      <div className="greetings">
         <div className="greetings-wrapper">
            <div className="greetings-wrapper__title text_primary">
               Hi, I&apos;m Reason.
            </div>
            <div className="greetings-wrapper__subtitle text_secondary">
               I am Junior Javascript Developer.
            </div>

            <div className="greetings-wrapper__group">
               <Btn
                  type="primary"
                  round="true"
                  text="See projects"
                  handler={() => {
                     document.querySelector('#projects').scrollIntoView({
                        behavior: 'smooth',
                     });
                  }}
               />
               <Btn
                  type="secondary"
                  round="true"
                  text="get in touch"
                  handler={() => {
                     window.open('mailto:korobovi4@gmail.com');
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default Greetings;
