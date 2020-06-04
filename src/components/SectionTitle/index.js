import React from 'react';
import './section-title.scss';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
   return (
      <div className="sectionTitle">
         <span className="sectionTitle__text"> {title}</span>
      </div>
   );
};

SectionTitle.propTypes = {
   title: PropTypes.string.isRequired,
};

export default SectionTitle;
