import React from 'react';
import './item.scss';
import demoSVG from '../../../assets/images/projects/demo.svg';
import codeSVG from '../../../assets/images/projects/code.svg';
import PropTypes from 'prop-types';

const Item = ({ title, icon, link, git, description, type, features }) => {
   return type === 'project' ? (
      <div className="project-item">
         <div className="project-item-inner">
            <div className="project-item-front">
               <img src={icon} className="project-item-front__icon" />
               <p className="project-item-front__title">{title}</p>
            </div>
            <div className="project-item-back">
               <div className="project-item-back__title">{title}</div>
               <div className="project-item-back__description">{description}</div>
               <div className="project-item-back__wrapper">
                  <a
                     href={link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="project-item-back__icon"
                  >
                     <img src={demoSVG} title="See a Demo" />
                  </a>
                  <a
                     href={git}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="project-item-back__icon"
                  >
                     <img src={codeSVG} title="Source code" />
                  </a>
               </div>
            </div>
         </div>
      </div>
   ) : (
      <div className="skill-item">
         <img className="skill-item__icon" src={icon} />
         <p className="skill-item__title">{title}</p>
         {features.map((e, index) => {
            return (
               <p key={index} className="skill-item__feature">
                  {e}
               </p>
            );
         })}
      </div>
   );
};

Item.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   link: PropTypes.string,
   git: PropTypes.string,
   description: PropTypes.string,
   features: PropTypes.array,
};

export default Item;
