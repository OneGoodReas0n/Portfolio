import React from 'react';
import './socials.scss';
import SocialLink from './SocialLink';
import fbSvg from '../../assets/images/socials/fb.svg';
import linkedInSvg from '../../assets/images/socials/linkedin.svg';
import gitSvg from '../../assets/images/socials/git.svg';

const socialLinks = [
   {
      id: 1,
      title: 'facebook',
      icon: fbSvg,
      link: 'https://www.facebook.com/profile.php?id=100003452134570',
   },
   {
      id: 2,
      title: 'linkedIn',
      icon: linkedInSvg,
      link: 'https://www.linkedin.com/in/illia-korobov-450639170/',
   },
   {
      id: 3,
      title: 'github',
      icon: gitSvg,
      link: 'https://github.com/OneGoodReas0n',
   },
];

const Socials = () => {
   return (
      <div className="socials">
         {socialLinks.map(({ id, title, icon, link }) => {
            return <SocialLink key={id} title={title} icon={icon} link={link} />;
         })}
      </div>
   );
};

export default Socials;
