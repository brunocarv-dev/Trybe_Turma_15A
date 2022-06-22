"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(enrollment, name, examsGrades, worksGrades) {
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = examsGrades;
        this.worksGrades = worksGrades;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length != 4) {
            throw new Error('A pessoa precisa ter 4 notas de prova.');
        }
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length != 2) {
            throw new Error('A pessoa precisa ter 2 notas de trabalho.');
        }
        this._worksGrades = value;
    }
    sumGrades() {
        return [...this.examsGrades, ...this.worksGrades]
            .reduce((previousGrade, grade) => {
            grade += previousGrade;
            return grade;
        }, 0);
    }
    sumAverage() {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.worksGrades.length;
        return Math.round(sumGrades / divider);
    }
}
exports.default = Student;
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            throw new Error('O nome deve ter no mínimo três caracteres');
        }
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro');
        if ((new Date().getTime() - value.getTime()) / 31536000000 > 120)
            throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
}
const student1 = new Student('1234', 'Gustavo', [5, 6, 7, 8], [8, 9]);
console.log(student1);
console.log('Media das notas', student1.sumAverage());
const student2 = new Student('12345', 'João', [7, 9, 10, 8], [8, 10]);
console.log(student2);
console.log('Media das notas', student2.sumAverage());
const person1 = new Person('Bru', new Date('1996/09/17'));
console.log(person1.birthDate);
