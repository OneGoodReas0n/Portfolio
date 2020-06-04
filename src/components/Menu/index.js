import React from 'react';
import './menu.scss';
import MenuItem from './Menu-Item';

const items = [
   { id: 1, title: 'Home' },
   { id: 2, title: 'About' },
   { id: 3, title: 'Skills' },
   { id: 4, title: 'Projects' },
];

const Menu = () => {
   return (
      <div className="menu" id="menu">
         <ul>
            {items.map(({ id, title }) => {
               return (
                  <li key={id}>
                     <MenuItem title={title} />
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Menu;
