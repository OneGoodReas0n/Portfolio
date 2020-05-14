import React from 'react';
import './social-link.scss';
import PropTypes from 'prop-types';

const SocialLink = ({ title, icon }) => {
  return <img className="socials__item" src={icon} title={title} />;
};

SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SocialLink;
