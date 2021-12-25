import React, { Component } from 'react';
import Daugther from './Daugther'

class Father extends Component {

  render(props) {
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daugther/>
      </div>
    );
  }
}

export default Father;
