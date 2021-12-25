import React, { Component } from 'react';
import Grandmother from './Grandmother';
import MyContext from '../context/MyContext';

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
    const contextValue = {
      money: this.state.money,
      handleSpendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGranmother;
