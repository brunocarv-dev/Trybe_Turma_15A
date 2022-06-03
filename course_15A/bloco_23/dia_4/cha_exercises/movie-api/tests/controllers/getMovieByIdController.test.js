const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/getMovieById');
const MovieControler = require('../../controllers/getMovieById');
const { getMovieById } = require('../../models/getMovieById');

describe('Testes da rota getMovieById na controllers', () => {
  describe('Ao chamar a função getMovieById', () => {    
    describe('E o payloadMovie for inválido', () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.params = {};
  
        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();
        sinon.stub(MovieService, 'getMovieById').resolves({ correct: false });
      });

      after(() => {
        MovieService.getMovieById.restore();
      })
      
      it('É chamado o status com o código 400', async () => {
        await MovieControler.getMovieById(request, response);

        expect(response.status.calledWith(400)).to.be.equal(true);
      });

      it('É chamado o send com a mensagem "Dados inválidos"', async () => {

        await MovieControler.getMovieById(request, response);

        expect(response.send.calledWith('Dados inválidos').to.be.equal(true));
      });
    });

    describe('E o payloadMovie for válido', () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = {
          id: 1,
        };

        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();

        sinon.stub(MovieService, 'getMovieById').resolves({ correct: true, result: {
          title: 'O Conde de Monte Cristo',
          directedBy: 'Kevin Reynolds',
          releaseYear: '2002',
        } });
      });

      after(() => {
        MovieService.getMovieById.restore();
      });

      it('É chamado o status com o código 200', async () => {
        await MovieControler.getMovieById(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('É chamado o json com o resultado da pesquisa', async () => {
        await MovieControler.getMovieById(request, response);

        expect(response.json.calledWith({
          title: 'O Conde de Monte Cristo',
          directedBy: 'Kevin Reynolds',
          releaseYear: '2002',
        })).to.be.equal(true);
      });
    });
  });
});