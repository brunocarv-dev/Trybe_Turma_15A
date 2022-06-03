const BookServices = require('../services/bookServices');

const validateId = (id) => {
  return id;
};

const validateBody = (title, author, pageQuantity) => {
  if (!title || typeof title !== 'string') return false;
  if (!author || typeof author !== 'string') return false;
  if (!pageQuantity || typeof pageQuantity !== 'number') return false;
  return true;
}

const getAll = async (_req, res) => {
  const books = await BookServices.getAll();

  if (!books) return res.status(400).json({ message: "Não foi possível requisitar os books" })

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!validateId(id)) return res.status(401).json({ message: 'Id inválido!' })

  const book = await BookServices.getById(id);

  if (book.error) return res.status(book.error).json('Algo deu errado');

  return res.status(201).json(book.result);
};

const create = async (req, res) => {
  const { title, author, pageQuantity} = req.body;

  if (!validateBody(title, author, pageQuantity)) return res.status(400).json({ message: 'Dados inválidos!' });
  
  const createdBook = await BookServices.create(title, author, pageQuantity);

  console.log(createdBook);

  if (createdBook.error) return res.status(createdBook.error).json({ message: 'Algo deu errado!' });

  return res.status(201).json(createdBook.result)
}
module.exports = {
  getAll,
  getById,
  create,
};