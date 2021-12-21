import React, { Component } from 'react'

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => (
      { inheritance: prevState.inheritance - 1000 }
    ));
  }

  render() {
    return (
      <Grandmother inheritance={this.state.inheritance} />
      );
  }
}

function Grandmother(props) {
  return(
    <Father inheritance={props.inheritance} />
  );
}

function Father(props) {
  return(
    <Daughter inheritance={props.inheritance}
  );
}

function Daughter(props) {
  return(
    <div>
      <span>
      {`Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`}
      </span>
    </div>
  )
}

export default GreatGrandfather;
