import React from 'react';
import './project-item.scss';
import demoSVG from '../../../assets/images/projects/demo.svg';
import codeSVG from '../../../assets/images/projects/code.svg';
import PropTypes from 'prop-types';

const ProjectItem = ({ title, icon, link, git }) => {
   return (
      <div className="project-item">
         <div className="project-item-inner">
            <div className="project-item-front">
               <img src={icon} className="project-item-front__icon" />
               <p className="project-item-front__title">{title}</p>
            </div>
            <div className="project-item-back">
               <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                     src={demoSVG}
                     className="project-item-back__icon"
                     title="See a Demo"
                  />
               </a>
               <a href={git} target="_blank" rel="noopener noreferrer">
                  <img
                     src={codeSVG}
                     className="project-item-back__icon"
                     title="Source code"
                  />
               </a>
            </div>
         </div>
      </div>
   );
};

ProjectItem.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
   git: PropTypes.string.isRequired,
};

export default ProjectItem;
