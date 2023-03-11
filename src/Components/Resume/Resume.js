import React, { Component } from 'react';
import Slide from 'react-reveal';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="skills">
        {/* <Slide left duration={1300}>
          <Education data={this.props.data.education} />
        </Slide>

        <Slide left duration={1300}>
          <Work data={this.props.data.work} />
        </Slide> */}

        <Slide left duration={1300}>
          <Skills data={this.props.data.skills} />
        </Slide>
      </section>
    );
  }
}

export default Resume;
