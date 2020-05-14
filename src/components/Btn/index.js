import React from 'react';
import './btn.scss';
import PropTypes from 'prop-types';

const Btn = ({ text, type }) => {
  return (
    <div className={type === 'primary' ? 'btn btn-primary' : 'btn btn-secondary'}>
      <span>{text}</span>
    </div>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Btn;
