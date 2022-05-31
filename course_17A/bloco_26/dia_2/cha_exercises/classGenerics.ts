class State<S> {
  _state: S;
  
  constructor () {
    this._state = this.getState();
  }

  getState() {
    return this._state
  }

  setState(x: S) {
    this._state = x;
  }
}

const numState = new State<Number>();
numState.setState(1)

console.log(numState.getState());

export default State;