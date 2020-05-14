import React from 'react';
import './project-item.scss';
import PropTypes from 'prop-types';

const ProjectItem = ({ title, icon }) => {
  return (
    <div className="project-item">
      <img src={icon} className="project-item__icon" />
      <p className="project-item__title">{title}</p>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ProjectItem;
