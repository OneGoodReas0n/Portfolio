import React, { Component } from 'react';
import './contact.scss';
import SectionTitle from '../../../components/SectionTitle';
import Btn from '../../../components/Btn';
import Socials from '../../../components/Socials';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <SectionTitle text="contact" />
        <div className="contact__form">
          <div>
            <input className="contact__input" placeholder="Your email here ..." />
          </div>
          <div>
            <Btn text="Send" type="secondary" />
          </div>
        </div>
        <div className="contact__footer">
          <Socials className="pre-line" />
          <span className="contact__text pre-line">Site by Reason</span>
        </div>
      </div>
    );
  }
}

export default Contact;
