import React from 'react';
import './menu.scss';
import MenuItem from './Menu-Item';

const items = [
  { id: 1, title: 'Home', active: true },
  { id: 2, title: 'About', active: false },
  { id: 3, title: 'Skills', active: false },
  { id: 4, title: 'Projects', active: false },
  { id: 5, title: 'Contact', active: false },
];

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        {items.map(({ id, title, active }) => {
          return (
            <li key={id}>
              <MenuItem title={title} active={active} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
