const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Ao inserir um novo livro no BD', () => {

  
  describe('E o payload informado for inválido', () => {
    const payloadMovie = {};
    
    it('retorna um booleano', async () => {
      const response = await MoviesService.create(payloadMovie);
      
      expect(response).to.be.a('boolean');
    });
    
    it('O booleano é "false"', async () => {
      const response = await MoviesService.create(payloadMovie);
      
      expect(response).to.be.equal(false);
    });
  });
  
  describe('E o payload informado for válido', () => {
    const payloadMovie = {
      title: 'Example Book',
      author_id: 3,
    };

    before(() => {
      const ID_EXAMPLE = 1;
  
      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE })
    });
  
    after(() => {
      MoviesModel.create.restore();
    });
    
    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);
      
      expect(response).to.be.a('object');
    });

    it('retorna um objeto com a propriedade "id"', async () => {
      const response = await MoviesService.create(payloadMovie);
      
      expect(response).to.have.a.property('id');
    });
  });
});
