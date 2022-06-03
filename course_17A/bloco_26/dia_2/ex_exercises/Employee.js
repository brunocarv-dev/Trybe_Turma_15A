"use strict";
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
employee.firstName = 'Bruno';
let teacher = {
    firstName: 'John',
    lastName: 'Doe',
    subject: 'Matemática',
    fullName() {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName} e leciono ${this.subject}`;
    }
};
console.log(teacher.sayHello());
