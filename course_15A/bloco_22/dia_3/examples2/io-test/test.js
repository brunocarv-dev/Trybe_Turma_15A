const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const read = require('./read');

const fileCrow = 'Crow, crow, crow!';

describe('Teste da função read', () => {
  
  describe('Testa se a read é uma função', () => {
    it('O retorno deve ser function', () => {
      expect(typeof read).to.be.equal('function');
    });
  });
  
  describe('Se o arquivo existe:', () => {

    before(() => {
      sinon.stub(fs, 'readFileSync').returns(fileCrow);
    });
    after(() => {
      fs.readFileSync.restore();
    });
    
    
    describe('Testa se o arquivo foi lido com sucesso',   () => {
      
      it('O retorno deve ser do tipo string', () => {
        const response = read('arquivo.txt');

        expect(response).to.be.a('string');
      });
      
      it('O retorno deve ser o conteúdo do arquivo passado como argumento', () => {
        const response = read('arquivo.txt');

        expect(response).to.be.equals(fileCrow);
      });
    });
  });
  
  describe('Se o arquivo não existe:', () => {
    
    before(() => {
      sinon.stub(fs, 'readFileSync').throws(new Error('Arquivo não encontrado'));
    });
    after(() => {
      fs.readFileSync.restore();
    });
    
    describe('Quando o arquivo passado como argumento não existe', () => {
      
      it('O retorno deve ser null', () => {
        const response = read('arquivoNaoExiste.txt');

        expect(response).to.be.equal(null);
      });
    });
  })
});