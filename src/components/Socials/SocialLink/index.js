import React from 'react';
import './social-link.scss';
import PropTypes from 'prop-types';

const SocialLink = ({ title, icon, link }) => {
   return (
      <div className="socials__item">
         <a href={link} target="_blank" rel="noopener noreferrer">
            <img className="" src={icon} title={title} />
         </a>
      </div>
   );
};

SocialLink.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
};

export default SocialLink;
