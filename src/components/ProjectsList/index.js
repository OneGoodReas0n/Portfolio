import React from 'react';
import './projects-list.scss';
import virtualKeyboardSvg from '../../assets/images/projects/virtual-keyboard.svg';
import pixelDrawSvg from '../../assets/images/projects/pixel-draw.svg';
import cloudSvg from '../../assets/images/projects/cloud.svg';
import ProjectItem from './ProjectItem';

const projects = [
  { id: 1, title: 'Weather Application', icon: cloudSvg },
  { id: 2, title: 'Virtual Keyboard', icon: virtualKeyboardSvg },
  { id: 3, title: 'Pixel Draw', icon: pixelDrawSvg },
];

const ProjectsList = () => {
  return (
    <div className="projects-list" id="projects-list">
      {projects.map(({ id, title, icon }) => {
        return <ProjectItem key={id} title={title} icon={icon} />;
      })}
    </div>
  );
};

export default ProjectsList;
