const readline = require('readline-sync');

const name = readline.question('Qual o seu nome?');
const age = readline.questionInt('Qual sua idade?');

console.log(`Hello, ${name}! Você está com ${age} anos de idade!`);


/* const dogNames = require('dog-names');

console.log(dogNames.femaleRandom()); */
