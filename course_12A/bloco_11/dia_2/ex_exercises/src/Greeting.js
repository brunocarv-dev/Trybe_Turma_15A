import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, my friend {this.props.name} {this.props.lastName}.</h1>;
  }
}

export default Greeting;