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
    const { inheritance } = this.state
    return (
      <Grandmother
        inheritance={inheritance}
        spendInheritance={this.spendInheritance}  
      />
      );
  }
}

function Grandmother(props) {
  return(
    <Father 
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}  
    />
  );
}

function Father(props) {
  return(
    <Daughter
      inheritance={props.inheritance}
      spendInheritance={props.spendInheritance}
    />
  );
}

function Daughter(props) {
  return(
    <div>
      <span>
      {`Tenho uma herança de R$ ${props.inheritance} que recebi do meu bisavô`}
      </span>
      <button type="button" onClick={props.spendInheritance}>
        Gastar Herança!
      </button>
    </div>
  );
}

export default GreatGrandfather;
