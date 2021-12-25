import React, { Component } from 'react';
import Father from './Father'

class Grandmother extends Component {

  render(props) {
    return (
      <div>
        <h2>Eu sou a vó</h2>
        <Father money={this.props.money} handleSpendMoney={this.props.handleSpendMoney} />
      </div>
    );
  }
}

export default Grandmother;
