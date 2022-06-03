const MoviesModel = require('../models/movieModel');

const isValid = (title, author_id) => {
  if (!title || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number') return false;

  return true;
};

const create = async ({ title, author_id }) => {
  const isBookValid = isValid(title, author_id);

  if (!isBookValid) return false;

  const { id } = await MoviesModel.create({ title, author_id });

  return {
    id,
  };
};

module.exports = {
  create,
};