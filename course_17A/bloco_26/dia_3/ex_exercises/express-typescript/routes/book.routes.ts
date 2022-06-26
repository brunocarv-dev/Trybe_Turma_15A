import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/book.middleware';

const router = Router();

const booksController = new BooksController();

const bookSlashId = '/books/:id'

router.get('/books', booksController.getAll);

router.get(bookSlashId, booksController.getById);

router.post('/books/', validationBook, booksController.create);

router.put(bookSlashId, validationBook, booksController.update);


router.delete(bookSlashId, booksController.remove);

export default router; 
