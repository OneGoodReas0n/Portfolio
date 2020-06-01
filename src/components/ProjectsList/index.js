import React from 'react';
import './projects-list.scss';
import virtualKeyboardSvg from '../../assets/images/projects/virtual-keyboard.svg';
import pixelDrawSvg from '../../assets/images/projects/pixel-draw.svg';
import cloudSvg from '../../assets/images/projects/cloud.svg';
import ProjectItem from './ProjectItem';
import useAnimation from '../../hooks/useAnimation';

const projects = [
   {
      id: 1,
      title: 'Weather Application',
      icon: cloudSvg,
      link: 'https://onegoodreas0n.github.io/weather-app/',
      git: 'https://github.com/OneGoodReas0n/weather-app',
   },
   {
      id: 2,
      title: 'Virtual Keyboard',
      icon: virtualKeyboardSvg,
      link: 'https://onegoodreas0n.github.io/virtual-keyboard/',
      git: 'https://github.com/OneGoodReas0n/virtual-keyboard',
   },
   {
      id: 3,
      title: 'Pixel Draw',
      icon: pixelDrawSvg,
      link: 'https://onegoodreas0n.github.io/codejam-palette/',
      git: 'https://github.com/OneGoodReas0n/codejam-palette',
   },
];

const ProjectsList = () => {
   const animation = useAnimation(4);

   return (
      <div
         className={`projects-list ${animation ? 'animate' : ''}`}
         id="projects-list"
      >
         {projects.map(({ id, title, icon, git, link }) => {
            return (
               <ProjectItem
                  key={id}
                  title={title}
                  icon={icon}
                  git={git}
                  link={link}
               />
            );
         })}
      </div>
   );
};

export default ProjectsList;
