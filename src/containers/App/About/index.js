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
      <div className="about" id="about">
        <SectionTitle text="about" />
        <div className="about__body">
          <span className="about__text">
            My name is{' '}
            <span className="purple">
              <b>Illia</b>
            </span>{' '}
            and i am self-educated programmer with a passion for{' '}
            <span className="light-blue">
              <b>React</b>
            </span>{' '}
            and{' '}
            <span className="dark-blue">
              <b>Automatization</b>
            </span>{' '}
            features.
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
