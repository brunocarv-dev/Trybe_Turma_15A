interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

employee.firstName = 'Bruno';
// console.log(employee);


interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  subject: 'Matemática',
  fullName(): string {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName} e leciono ${this.subject}`
  }
}

console.log(teacher.sayHello());