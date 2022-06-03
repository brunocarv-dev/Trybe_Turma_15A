const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, author_id } = req.body;

  const book = await MoviesService.create({ title, author_id });

  if (!book) {
    return res.status(400).send('Dados inválidos');
  };

  return res.status(201).send('Filme criado com sucesso!');
};

module.exports = {
  create,
};