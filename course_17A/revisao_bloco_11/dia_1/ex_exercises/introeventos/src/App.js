
import React from "react";


class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);

    console.log('Componente sendo construido');
  }
  
  handleClick() {
    console.log(this);
    console.log('Olá mundo!');
  }
  render() {
    console.log(this);
    return (
      <button onClick={this.handleClick}>Clique aqui!</button>
    );
  }
}

export default App;
