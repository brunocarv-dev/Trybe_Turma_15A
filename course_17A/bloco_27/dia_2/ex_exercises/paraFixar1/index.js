"use strict";
class SuperClass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends SuperClass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
const objetoSuperClass = new SuperClass(true);
function myFunc(param) {
    param.sayHello();
    if (param.isSuper === true)
        return console.log('Super!');
    console.log('Sub!');
}
const objetoSubClass = new Subclass();
myFunc(objetoSuperClass);
myFunc(objetoSubClass);
