import React from 'react';
import './socials.scss';
import SocialLink from './SocialLink';
import fbSvg from '../../assets/images/socials/fb.svg';
import linkedInSvg from '../../assets/images/socials/linkedin.svg';
import gitSvg from '../../assets/images/socials/git.svg';

const socialLinks = [
  { id: 1, title: 'facebook', icon: fbSvg },
  { id: 2, title: 'linkedIn', icon: linkedInSvg },
  { id: 3, title: 'github', icon: gitSvg },
];

const Socials = () => {
  return (
    <div className="socials">
      {socialLinks.map(({ id, title, icon }) => {
        return <SocialLink key={id} title={title} icon={icon} />;
      })}
    </div>
  );
};

export default Socials;
