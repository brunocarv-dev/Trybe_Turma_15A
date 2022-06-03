"use strict";
function makeState() {
    let state;
    function getState() {
        return state;
    }
    ;
    function setState(x) {
        state = x;
    }
    ;
    return { getState, setState };
}
;
const numberState = makeState();
numberState.setState(1);
console.log(numberState.getState());
const stringState = makeState();
stringState.setState('foo');
console.log(stringState.getState());
