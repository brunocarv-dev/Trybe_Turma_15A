import React, { Component } from 'react';
import Grandmother from './Grandmother';

class GreatGranmother extends Component {
  constructor(props) {
    super(props)
    this.state={
      money: 1000000,
    }
  }
  render() {

    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <Grandmother money={this.state.money} />
      </div>
    );
  }
}

export default GreatGranmother;
