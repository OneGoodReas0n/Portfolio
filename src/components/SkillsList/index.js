import React from 'react';
import './skills-list.scss';
import SkillsItem from './Skills-Item';
import frontendSvg from '../../assets/images/groups/frontend.svg';
import serverSvg from '../../assets/images/groups/server.svg';
import databaseSvg from '../../assets/images/groups/database.svg';
import deploymentSvg from '../../assets/images/groups/cloud.svg';
import useAnimation from '../../hooks/useAnimation';

const skills = [
   {
      id: 1,
      title: 'Frontend',
      features: [
         'HTML5',
         'CSS3 | SASS | BEM',
         'Javascript | Typescript',
         'React | Redux',
      ],
      icon: frontendSvg,
   },
   {
      id: 2,
      title: 'Server',
      features: ['Node JS | Express', 'Java | Spring Framework'],
      icon: serverSvg,
   },
   {
      id: 3,
      title: 'Database',
      features: ['MySQL', 'MongoDB'],
      icon: databaseSvg,
   },
   {
      id: 4,
      title: 'Deployment',
      features: ['Git | Git Pages', 'Google Cloud'],
      icon: deploymentSvg,
   },
];

const SkillsList = () => {
   const animation = useAnimation(3);

   return (
      <div className={`skills-list ${animation ? 'animate' : ''}`} id="skills-list">
         {skills.map(({ id, title, features, icon }) => {
            return (
               <SkillsItem key={id} title={title} features={features} icon={icon} />
            );
         })}
      </div>
   );
};

export default SkillsList;
