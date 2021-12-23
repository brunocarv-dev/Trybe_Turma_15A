import React, { Component } from 'react';
import Daugther from './Daugther'

class Father extends Component {

  render() {
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daugther money={this.props.money} />
      </div>
    );
  }
}

export default Father;
