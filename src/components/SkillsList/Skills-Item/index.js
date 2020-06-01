import React from 'react';
import './skills-item.scss';
import PropTypes from 'prop-types';

const SkillsItem = ({ title, features, icon }) => {
   return (
      <div className="skills-item">
         <img className="skills-item__icon" src={icon} />
         <p className="skills-item__title">{title}</p>
         {features.map((e, index) => {
            return (
               <p key={index} className="skills-item__feature">
                  {e}
               </p>
            );
         })}
      </div>
   );
};

SkillsItem.propTypes = {
   title: PropTypes.string.isRequired,
   features: PropTypes.array.isRequired,
   icon: PropTypes.string.isRequired,
};

export default SkillsItem;
