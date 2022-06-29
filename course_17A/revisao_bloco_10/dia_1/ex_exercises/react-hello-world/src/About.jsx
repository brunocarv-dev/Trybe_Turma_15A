import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'Typescript', 'Node.js']
    const jsxSkills = skills.map((item, index) => <li key= {index}>{ item }</li>)
    return (
      <div>
        <h1>Bruno Carvalho Trindade</h1>
        <p> Gosto de codar e ver filmes do Quentin Tarantino</p>
        <h2>Minhas Habilidades</h2>
        <lo>{ jsxSkills }</lo>
      </div>
    );
  }
}

export default About;