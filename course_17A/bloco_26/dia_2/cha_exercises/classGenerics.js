"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
    constructor() {
        this._state = this.getState();
    }
    getState() {
        return this._state;
    }
    setState(x) {
        this._state = x;
    }
}
const numState = new State();
numState.setState(1);
console.log(numState.getState());
exports.default = State;
