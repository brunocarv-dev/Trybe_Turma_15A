const connection = require('./connection');

const create = async ({ title, author_id }) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';

  const [response] = await connection.execute(query, [title, author_id]);

  return {
    id: response.insertId,
  }
}


module.exports = {
  create,
};