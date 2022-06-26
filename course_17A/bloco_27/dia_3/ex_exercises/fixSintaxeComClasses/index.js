"use strict";
class Character {
}
class MeleeCharacter extends Character {
    talk() {
        console.log('Olá, amigo! =D');
    }
    specialMove() {
        console.log('Modo amigao!');
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log('Olá, como vai? =D');
    }
    specialMove() {
        console.log('Modo grande parça!');
    }
}
function apresentar(character) {
    character.talk();
    character.specialMove();
}
const char1 = new MeleeCharacter();
const char2 = new LongRangeCharacter();
apresentar(char1);
apresentar(char2);
