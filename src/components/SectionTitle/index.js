import React from 'react';
import './section-title.scss';
import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
   return (
      <div className="sectionTitle">
         <span className="sectionTitle__text"> {text}</span>
      </div>
   );
};

SectionTitle.propTypes = {
   text: PropTypes.string.isRequired,
};

export default SectionTitle;
