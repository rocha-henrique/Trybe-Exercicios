import React, { Component } from 'react';

class About extends Component {
    render() {
        const skills = ['HTML', 'CSS', 'react', 'soft skills', 'JS', 'testeunitarioss']
        return (
            <div>
        <h1>
          {'henrique'}
        </h1>
        <p>
          {'rocha'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ skills.map((skill) => <li>{skill}</li>) }</ul>
      </div>
    );
  }
}

export default About;
