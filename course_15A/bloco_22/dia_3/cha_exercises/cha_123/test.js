const { expect } = require('chai');
const sinon = require('sinon');

const application = require('./application');

describe('Testes da função application', () => {
  describe('Testa o tipo de "application"', () => {
    it('Espera-se que o retorno seja function', () => {
      expect(application).to.be.a('function');
    });
  });
  describe('Testa o retorno da função', () => {

    it('O retorno da função deve ser uma string', () => {
      expect(application()).to.be.a('string');
    });
  });
  
  describe('Se o número passado como argumento for maior que zero', () => {
    it('O retorno deverá ser "positivo"', () => {
      const number = 1;
      expect(application(number)).to.be.equal('positivo');
    });
  });
    
  describe('Se o número passado como argumento for menor que zero', () => {
    it('O retorno deverá ser "negativo"', () => {
      const number = -1;

      expect(application(number)).to.be.equal('negativo');
    });
  });

  describe('Se o número passado como argumento for igual a zero', () => {
    it('O retorno deverá ser "neutro"', () => {
      const number = 0;

      expect(application(number)).to.be.equal('neutro');
    });
  });

  describe('Caso o valor passado como argumento não seja do tipo "number"', () => {
    it('Espera-se que o retorno seja a string "o valor deve ser um número"', () => {
      const noNumber = 'Olá!';

      expect(application(noNumber)).to.be.equal('o valor deve ser um número');
    });
  });
});