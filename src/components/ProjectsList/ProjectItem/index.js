import React from 'react';
import './project-item.scss';

const ProjectItem = ({ title, icon }) => {
  return (
    <div className="project-item">
      <img src={icon} className="project-item__icon" />
      <p className="project-item__title">{title}</p>
    </div>
  );
};

export default ProjectItem;
