abstract class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo`); }
}

class Bird extends Animal {
  move() {  
    console.log(`${this.name} está voando`);
  }
}

class Mammal extends Animal {
  move() {console.log(`${this.name} está andando`)}
}

class Fish extends Animal {
  move() {console.log(`${this.name} está nadando`)}
}

const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const c = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}

myMove(a);
myMove(b);
myMove(c);