const readline = require('readline-sync');

const peso = readline.questionFloat('Digite o seu peso:');
const altura = readline.questionFloat('Digite a sua altura:');

const funcClassIMC = (imc) => {
  if(imc < 18.5) console.log('Abaixo do peso (magreza)');
  if(imc >= 18.5 && imc <= 24.9) console.log('Peso normal');
  if(imc >= 25.0 && imc <=29.9) console.log('Acima do peso (sobrepeso)');
  if(imc >= 30.0 && imc <= 34.0)console.log('Obesidade grau I')
  if(imc >= 35.0 && imc <= 39.9)console.log('Obesidade grau II')
  if(imc >= 40.0)console.log('Obesidade graus III e IV')
}

const funcCalculator = (peso, altura) => {
  imc = peso / (altura * altura);
  funcClassIMC(parseFloat(imc));
  return parseFloat(imc);
}

console.log(funcCalculator(peso, altura));