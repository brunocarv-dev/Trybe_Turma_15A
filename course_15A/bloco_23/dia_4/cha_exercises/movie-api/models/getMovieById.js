const connection = require('./connection');

const getMovieById = async ({ id }) => {
  const query = 'SELECT * FROM model_example.movies WHERE id = ?';
  const [response] = await connection.execute(query, [id]);

  return response;
};

module.exports = {
  getMovieById
};