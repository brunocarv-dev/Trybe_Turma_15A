"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
function processIdentity(value, message) {
    console.log(message);
    return value;
}
// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber = processor(100, "Olá");
// let returnErrror = processor("Olá", 100);
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new ProcessIdentity(100, 'Olá');
processor.getIdentity();
