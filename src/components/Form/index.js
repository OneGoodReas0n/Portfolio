import React from 'react';
import './form.scss';
import Btn from '../Btn';

const Form = () => {
  return (
    <div className="form">
      <div>
        <input className="form__input" placeholder="Your email here ..." />
      </div>
      <div className="center">
        <Btn text="Send" type="secondary" />
      </div>
    </div>
  );
};

export default Form;
