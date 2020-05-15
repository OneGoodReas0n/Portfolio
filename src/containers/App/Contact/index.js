import React, { Component } from 'react';
import './contact.scss';
import SectionTitle from '../../../components/SectionTitle';
import Form from '../../../components/Form';
import Footer from '../../../components/Footer';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <SectionTitle text="contact" />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Contact;
