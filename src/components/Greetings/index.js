import React from 'react';
import './greetings.scss';
import Btn from '../Btn';

const Greetings = () => {
  return (
    <div className="greetings">
      <p>
        <span className="greetings__text greetings__text_primary">
          Hi, I&apos;m Reason.
        </span>
      </p>
      <p>
        <span className="greetings__text greetings__text_secondary">
          I am Junior Javascript Developer.
        </span>
      </p>
      <div className="greetings__group">
        <Btn type="primary" text="See projects" />
        <Btn type="secondary" text="get in touch" />
      </div>
    </div>
  );
};

export default Greetings;
