"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makePair() {
    let pair;
    function getPair() {
        return pair;
    }
    ;
    function setPair(x, y) {
        pair = {
            first: x,
            second: y
        };
    }
    return { getPair, setPair };
}
;
const { getPair, setPair } = makePair();
setPair(1, 'foo');
console.log(getPair());
setPair(3, 4);
console.log(getPair());
