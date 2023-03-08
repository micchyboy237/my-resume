import React, { Component } from 'react';

class Skills extends Component {
  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  renderSkills(skills) {
    return skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = 'bar-expand ' + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  render() {
    const skillCategories = this.props.data.map(({ category, items }) => {
      return (
        <div key={category}>
          <p className="title">{category}</p>

          <div className="bars">
            <ul className="skills">{this.renderSkills(items)}</ul>
          </div>
        </div>
      );
    });

    return (
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="categories">{skillCategories}</div>
        </div>
      </div>
    );
  }
}

export default Skills;
