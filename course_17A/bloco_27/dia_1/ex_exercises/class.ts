export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];
  
  constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
  }
  
  public get enrollment(): string {
    return this._enrollment;
  }
  
  public set enrollment(value: string) {
    this._enrollment = value;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
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
}

const student1 = new Student('1234', 'Gustavo', [5, 6, 7, 8], [8, 9]);
console.log(student1);
console.log('Media das notas', student1.sumAverage());

const student2 = new Student('12345', 'João', [7, 9, 10, 8], [8, 10]);
console.log(student2);
console.log('Media das notas', student2.sumAverage());
