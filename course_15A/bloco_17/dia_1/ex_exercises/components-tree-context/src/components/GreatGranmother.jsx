import React, { Component } from 'react';
import Grandmother from './Grandmother';

class GreatGranmother extends Component {
  constructor(props) {
    super(props)
    this.state={
      money: 1000000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney(){
    this.setState((prevState) => ({
      money: prevState.money - 100,
    }))
  }

  render() {

    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <Grandmother money={this.state.money} handleSpendMoney={this.handleSpendMoney} />
      </div>
    );
  }
}

export default GreatGranmother;
