import React, { Component } from 'react';
import './about.scss';
import SectionTitle from '../../../components/SectionTitle';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <SectionTitle text="about" />
        <div className="about__body">
          <span className="about__text">
            My name is <span className="purple">Illia</span> and i am self-educated
            programmer with a passion for <span className="light-blue">React</span>{' '}
            and <span className="dark-blue">Automatization</span> features.
          </span>
        </div>
        <div className="about__body">
          <span className="about__text">
            And i am searching for my first real product experience.
          </span>
        </div>
      </div>
    );
  }
}

export default About;
