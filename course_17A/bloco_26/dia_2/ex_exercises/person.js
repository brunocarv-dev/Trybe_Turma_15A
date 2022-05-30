"use strict";
var eyeColor;
(function (eyeColor) {
    eyeColor["Black"] = "Pretos";
    eyeColor["Blue"] = "Azuis";
    eyeColor["Green"] = "Verdes";
    eyeColor["Brown"] = "Castanhos";
})(eyeColor || (eyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    ;
    speak() {
        console.log(this.name, 'está falando.');
    }
    eat() {
        console.log(this.name, 'está comendo.');
    }
    walk() {
        console.log(this.name, 'está andando.');
    }
}
;
const person1 = new Person("Jane Doe", new Date("1986-01-01"), eyeColor.Brown);
const person2 = new Person("Joe Doe", new Date("1980-08-05"), eyeColor.Black);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
