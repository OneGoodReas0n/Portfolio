import React, { Component } from 'react';
import './contact.scss';
import SectionTitle from '../../../components/SectionTitle';
import Form from '../../../components/Form';
import Footer from '../../../components/Footer';

class Contact extends Component {
   constructor() {
      super();
   }

   render() {
      return (
         <section className="section-outer section-contact">
            <div className="section-inner" id="contact">
               <SectionTitle text="contact me" />
               <Form />
               <Footer />
            </div>
         </section>
      );
   }
}

export default Contact;
