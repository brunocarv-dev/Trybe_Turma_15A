const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/getMovieById');

describe('Testes da rota getMovieById na models', () => {
  describe('Busca por um filme no banco de dados a partir de um id', () => {
    const payloadMovie = {
      id: 1,
    };
    
    before(async () => {
      const execute = [{
        title: 'O Conde de Monte Cristo',
        directedBy: 'Kevin Reynolds',
        releaseYear: '2002',
      }];

      sinon.stub(connection, 'execute').resolves(execute);
    });

    after(() => {
      connection.execute.restore();
    })

    describe('Se esse filme existe', () => {
      it('Retorna um objeto', async () => {
        const response = await MoviesModel.getMovieById(payloadMovie)

        expect(response).to.be.a('object');
      });

      it('Retorna um objeto com a propriedade "title"', async () => {
        const response = await MoviesModel.getMovieById(payloadMovie);

        expect(response).to.have.a.property("title");
      });

      it('Retorna um objeto com a propriedade "directedBy"', async () => {
        const response = await MoviesModel.getMovieById(payloadMovie);

        expect(response).to.have.a.property("directedBy");
      });

      it('Retorna um objeto com a propriedade "releaseYear"', async () => {
        const response = await MoviesModel.getMovieById(payloadMovie);

        expect(response).to.have.a.property("releaseYear");
      });

    });
  });
});