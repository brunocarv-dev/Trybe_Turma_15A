import React, { Component } from 'react';

class Daugther extends Component {

  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <p>{`Eu tenho R$ ${this.props.money} para gastar`}</p>
      </div>
    );
  }
}

export default Daugther;
