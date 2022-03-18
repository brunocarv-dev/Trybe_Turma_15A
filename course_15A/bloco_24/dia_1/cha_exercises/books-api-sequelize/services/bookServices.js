const { Book } = require('../models');

const getAll = async () => {
  try {
  const books = await Book.findAll();

  return books;
  } catch (e) {
    console.error(e);
  }
};

const getById = async (id) => {
  try {
    const book = await Book.findByPk(id);
    
    if (!book) return { error: 500 };

    return {
      result: book,
    };
  } catch (e) {
    console.error(e);
  }
};

const create = async (title, author, pageQuantity) => {
  try{
    console.log(title, author, pageQuantity);

    const createdBook = await Book.create({title, author, pageQuantity});

    console.log(createdBook, "Services");

    if (!createdBook) return { error: 401 };

    return { result: createdBook };
  } catch (e) {
    console.error(e);
  };
};

module.exports = {
  getAll,
  getById,
  create,
};