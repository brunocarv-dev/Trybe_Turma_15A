const connection = require('./Connection');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books', );
  return books;
};

const getByAuthorId = async (author_id) => {
  const [book] = await connection.execute('SELECT id, title, author_id FROM model_example.books WHERE books.id = ?', [author_id]);
  return book;
};

const getId = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE books.id = ?';

  const [book] = await connection.execute(query, [id]);

  return book;
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  getId,
};