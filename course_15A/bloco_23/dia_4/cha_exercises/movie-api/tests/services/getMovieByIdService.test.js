const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/getMovieById');
const MoviesService = require('../../services/getMovieById');

describe('Testes da rota getMovieById na services', () => {
  describe('Verifica se o id informado é válido', () => {
    describe('Quando o id informado é inválido', () => {
      const payloadMovie = { };

      it('retorna um booleano', async () => {
        const response = await MoviesService.getMovieById(payloadMovie);
        
        expect(response.correct).to.be.a('boolean');
      });

      it('O booleano é "false"', async () => {
        const response = await MoviesService.getMovieById(payloadMovie);

        expect(response.correct).to.be.equal(false);
      });
    });

    describe('Quando o id informado é válido', () => {
      const payloadMovie = {id: 1};

      before(async () => {
        sinon.stub(MoviesModel, 'getMovieById').resolves(payloadMovie);
      });

      after(() => {
        MoviesModel.getMovieById.restore();
      })

      it('retorna um booleano', async () => {
        const response = await MoviesService.getMovieById(payloadMovie);

        expect(response.correct).to.be.a('boolean')
      });

      it('O booleano é "true"', async () => {
        const response = await MoviesService.getMovieById(payloadMovie);

        expect(response.correct).to.be.equal(true);
      });
    });
  });
});