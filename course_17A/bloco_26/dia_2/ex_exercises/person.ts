enum eyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: eyeColor;

  constructor(name: string, birthDate: Date, eyeColor: eyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  };

  speak(): void {
    console.log(this.name, 'está falando.');
  }

  eat(): void {
    console.log(this.name, 'está comendo.');
  }

  walk(): void {
    console.log(this.name, 'está andando.');
  }
};

const person1 = new Person("Jane Doe", new Date("1986-01-01"), eyeColor.Brown);
const person2 = new Person("Joe Doe", new Date("1980-08-05"), eyeColor.Black);

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();
