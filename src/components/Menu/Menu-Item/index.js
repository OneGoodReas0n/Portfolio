import React from 'react';
import './menu-item.scss';
import PropTypes from 'prop-types';

const MenuItem = ({ title, active }) => {
  return <a className={active ? 'menu__item active' : 'menu__item'}>{title}</a>;
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default MenuItem;
