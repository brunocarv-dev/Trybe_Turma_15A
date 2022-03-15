const MoviesModel = require('../models/getMovieById');

const getMovieById = async ({ id }) => {
  
  if (!id) return { correct: false, };

  const response = await MoviesModel.getMovieById({ id });

  return {
    correct: true,
    result: response,
  }
};

module.exports = {
  getMovieById
};