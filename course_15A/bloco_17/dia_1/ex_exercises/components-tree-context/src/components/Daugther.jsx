import React, { Component } from 'react';

class Daugther extends Component {

  render(props) {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <p>{`Eu tenho R$ ${this.props.money} para gastar`}</p>
        <button onClick={this.props.handleSpendMoney}>Pedir um Ifood</button>
      </div>
    );
  }
}

export default Daugther;
