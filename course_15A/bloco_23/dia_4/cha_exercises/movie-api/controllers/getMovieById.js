const MoviesService = require('../services/getMovieById');

const getMovieById = async (req, res) => {
  const { id } = req.params;

  const response = await MoviesService.getMovieById({ id });

  if (!response.correct) return res.status(400).send('Dados inválidos');

  return res.status(200).json(response.result);
};

module.exports = {
  getMovieById
};