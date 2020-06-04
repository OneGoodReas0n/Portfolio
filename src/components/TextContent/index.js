import React from 'react';
import PropTypes from 'prop-types';
import './text-content.scss';

const TextContent = ({ children }) => {
   return (
      <div className="text-content">
         <div className="text-wrapper">{children.map((e) => e)}</div>
      </div>
   );
};

TextContent.propTypes = {
   children: PropTypes.array.isRequired,
};

export default TextContent;
