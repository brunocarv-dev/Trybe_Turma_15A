const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const application = require('./application');

const param1 = 'crow.txt';
const param2 = 'Crow, crow, crow!';

describe('Testa application', () => {
  
  describe('Testa o tipo de application', () => {
    it('Espera-se que "application" seja uma "function"', () => {
      expect(application).to.be.a('function')
    });
  });

  describe('Se o arquivo passado como parâmetro existe e é passado o conteúdo a ser escrito nele', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns(param2);
    });

    after(() => {
      fs.writeFileSync.restore();
    });
    
    describe('Passados os parâmetro, espera-se que:', () => {
      it('Seja retornado "ok"', () => {
        expect(application(param1, param2)).to.be.equal('ok');
      });
    });
  });

  describe('Se o arquivo passado como o argumento ou o seu conteudo não existirem', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').throws(new Error('Invalid data!'))
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe('Quando o arquivo não existe, então:', () => {
      it('Deve ser retornado o erro "Invalid data!"', () => {
        const noParam1 = '';
        
        expect(application(noParam1, param2)).to.be.equal('Invalid data!');
      });
    });

    describe('Quando o conteudo do arquivo não existe, então:', () => {
      it('Deve ser retornado o erro "Invalid data!"', () => {
        const noParam2 = '';

        expect(application(param1, noParam2)).to.be.equal('Invalid data!');
      });
    });
  });

});