import React from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ title }) => {
   const id = String(title).toLowerCase();
   return (
      <a href={`#${id}`} className="menu__item active">
         {title}
      </a>
   );
};

MenuItem.propTypes = {
   title: PropTypes.string.isRequired,
};

export default MenuItem;
