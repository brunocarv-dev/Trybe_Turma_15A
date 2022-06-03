function makeState<S extends number | string = number>() {
  let state: S
  function getState() {
    return state;
  };
  function setState(x: S) {
    state = x
  };
  return { getState, setState };
};

const numberState = makeState<number>();

numberState.setState(1);
console.log(numberState.getState());

const stringState = makeState<string>();

stringState.setState('foo');
console.log(stringState.getState());







