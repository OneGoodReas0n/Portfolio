import React from 'react';
import './form.scss';
import Btn from '../Btn';

const Form = () => {
   return (
      <div className="form">
         <div className="form__input">
            <input placeholder="Your email" />
         </div>
         <div className="form__button">
            <Btn text="Send" type="secondary" />
         </div>
      </div>
   );
};

export default Form;
