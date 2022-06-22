"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return (this.myNumber + myParam).toString();
    }
}
const MyClassObject = new MyClass(5);
console.log(MyClassObject.myNumber);
console.log(MyClassObject.myFunc(5));
