import React, { Component } from 'react';
import MyContext from '../context/MyContext';

class Daugther extends Component {

  render(props) {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          {
            value => (
              <div>
                <p>{`Eu tenho ${value.money}`}</p>
                <button onClick={value.handleSpendMoney}>Pedir um Ifood</button> 
              </div>
            )
          }
        </MyContext.Consumer>
 {/*        <p>{`Eu tenho R$ ${this.props.money} para gastar`}</p>
        <button onClick={this.props.handleSpendMoney}>Pedir um Ifood</button> */}
      </div>
    );
  }
}

export default Daugther;
