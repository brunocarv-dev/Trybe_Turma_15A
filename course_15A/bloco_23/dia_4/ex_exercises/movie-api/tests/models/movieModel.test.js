const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Testes da camada model relativos ao movie', () => {
  
  describe('Ao inserir um novo filme no db', () => {
    const payloadMovie = {
      title: 'Example Book',
      author_id: 3,
    };
    
    before(async () => {
      const execute = [{ insertId: 1 }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
      connection.execute.restore();
    })

    describe('Quando o filme é inserido com sucesso', () => {
      it('Retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.a('object');
      });
      
      it('Tais itens possuem as propriedades "id"', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });
    });

    describe('Quando existir filmes criados', () => {
      it('Retorna um array', () => {
  
      });
  
      it('O array não está vazio', () => {
  
      });
  
      it('O array possui itens do tipo objeto', () => {
  
      });
    });
  });
});