import React from 'react';
import './list.scss';
import Item from './Item';
import useAnimation from '../../hooks/useAnimation';
import { divideArray } from '../../utils/functions';
import PropTypes from 'prop-types';

const List = ({ elements, listId, numOfElem }) => {
   const animation = useAnimation(numOfElem);
   const arrays = divideArray(elements);
   const type = String(listId).includes('skill') ? 'skill' : 'project';
   return (
      <>
         <div
            className={`list ${animation ? 'animate' : ''} ${
               type === 'skill' ? 'bottom-padding' : ''
            }`}
            id={listId}
         >
            {elements.map(
               ({ id, title, icon, git, link, description, features }) => {
                  return (
                     <Item
                        key={id}
                        title={title}
                        icon={icon}
                        git={git}
                        link={link}
                        description={description}
                        features={features}
                        type={type}
                     />
                  );
               }
            )}
         </div>
         <div
            className={`divided-list ${animation ? 'animate' : ''}`}
            id="projects-list"
         >
            {arrays.map((e) => {
               return (
                  <div
                     key={e[0].id}
                     className={`divided-list__wrapper ${
                        e.length === 1 ? 'w50-center' : ''
                     }`}
                  >
                     {e.map(
                        ({ id, title, icon, git, link, description, features }) => {
                           return (
                              <Item
                                 key={id}
                                 title={title}
                                 icon={icon}
                                 git={git}
                                 link={link}
                                 description={description}
                                 features={features}
                                 type={type}
                              />
                           );
                        }
                     )}
                  </div>
               );
            })}
         </div>
      </>
   );
};

List.propTypes = {
   elements: PropTypes.array.isRequired,
   listId: PropTypes.string.isRequired,
   numOfElem: PropTypes.number.isRequired,
};

export default List;
