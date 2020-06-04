import React from 'react';
import './collapsed.scss';

const CollapsedMenu = () => {
   return (
      <div
         className="collapsed-menu"
         onClick={() => {
            const menu = document.getElementById('menu');
            menu.classList.toggle('open');
         }}
      >
         <ul>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   );
};

export default CollapsedMenu;
