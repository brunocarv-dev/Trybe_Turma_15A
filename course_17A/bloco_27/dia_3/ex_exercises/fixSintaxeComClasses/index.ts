abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Olá, amigo! =D')
  }
  specialMove(): void {
    console.log('Modo amigao!');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Olá, como vai? =D')
  }
  specialMove(): void {
    console.log('Modo grande parça!');
  }
}

function apresentar(character: Character): void {
  character.talk();
  character.specialMove();
}

const char1 = new MeleeCharacter();
const char2 = new LongRangeCharacter();

apresentar(char1);
apresentar(char2);