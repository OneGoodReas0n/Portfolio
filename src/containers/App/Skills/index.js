import React, { Component } from 'react';
import './skills.scss';
import SectionTitle from '../../../components/SectionTitle';
import SkillsList from '../../../components/SkillsList';

class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="skills" id="skills">
        <SectionTitle text="skills" />
        <SkillsList />
      </div>
    );
  }
}

export default Skills;
