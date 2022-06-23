class Person {  
  constructor (private _name: string,private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    if (value.length < 4 ) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  public validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if ((new Date().getTime() - value.getTime()) / 31_536_000_000 > 120) throw new Error('A pessoa não pode possuir mais de 120 anos')
  }
}

export default class Student extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }
  
  public get enrollment(): string {
    return this._enrollment;
  }
  
  public set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }
  
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  
  public set examsGrades(value: number[]) {
    if (value.length != 4) {
      throw new Error('A pessoa precisa ter 4 notas de prova.');
    }
    
    this._examsGrades = value;
  }
  
  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  
  public set worksGrades(value: number[]) {
    if (value.length != 2) {
      throw new Error('A pessoa precisa ter 2 notas de trabalho.');
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousGrade, grade) => {
        grade += previousGrade
        return grade;
      }, 0)
  }

  sumAverage(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;
    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}


const student1 = new Student('Gustavo', new Date('2005/03/17'));
console.log(student1);
console.log('Media das notas', student1.sumAverage());

const student2 = new Student('João', new Date('2006/07/10'));
console.log(student2);
console.log('Media das notas', student2.sumAverage());

const person1 = new Person('Bruno', new Date('1996/09/17'));

console.log(person1.birthDate);