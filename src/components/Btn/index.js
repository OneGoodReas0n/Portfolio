import React from 'react';
import './btn.scss';
import PropTypes from 'prop-types';

const Btn = ({ text, type, round, handler }) => {
   return (
      <div className="btn">
         <button
            className={`${type === 'primary' ? 'btn-primary' : 'btn-secondary'} ${
               round ? 'round' : ''
            }`}
            onClick={handler}
         >
            {text}
         </button>
      </div>
   );
};

Btn.propTypes = {
   text: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   round: PropTypes.string.isRequired,
   handler: PropTypes.func,
};

export default Btn;
