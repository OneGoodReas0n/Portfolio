import React from 'react';
import './project-item.scss';
import demoSVG from '../../../assets/images/projects/demo.svg';
import codeSVG from '../../../assets/images/projects/code.svg';
import PropTypes from 'prop-types';

const ProjectItem = ({ title, icon }) => {
  return (
    <div className="project-item">
      <div className="project-item__inner">
        <div className="project-item__front">
          <img src={icon} className="project-item__icon" />
          <p className="project-item__title">{title}</p>
        </div>
        <div className="project-item__back">
          <img src={demoSVG} className="project-item__icon" title="See a Demo" />
          <img src={codeSVG} className="project-item__icon" title="Source code" />
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ProjectItem;
