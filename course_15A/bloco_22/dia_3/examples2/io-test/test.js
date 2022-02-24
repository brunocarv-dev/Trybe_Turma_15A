const { expect } = require('chai');
const read = require('./read');

const fileCrow = 'Crow, crow, crow!';

describe('Teste da função read', () => {

  describe('Testa se a read é uma função', () => {
    it('O retorno deve ser function', () => {
    expect(typeof read).to.be.equal('function');
    });
  });

  describe('Testa se o arquivo foi lido com sucesso',   () => {
    const response = read('fileCrow.txt');

    it('O retorno deve ser do tipo string', () => {
      expect(response).to.be.a('string');
    });

    it('O retorno deve ser o conteúdo do arquivo passado como argumento', () => {
    expect(response).to.be.equals('Crow, crow, crow!');
    });
  });

  describe('Testa se, quando o arquivo passado como   argumento não existe', () => {
    const response = read();

    it('O retorno deve ser null', () => {
      expect(response).to.be.equal(null);
    });
});
});