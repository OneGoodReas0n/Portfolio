import React from 'react';
import './footer.scss';
import Socials from '../Socials';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <Socials className="pre-line" />
        <span className="footer__text pre-line">Site by Reason</span>
      </div>
    </div>
  );
};

export default Footer;
