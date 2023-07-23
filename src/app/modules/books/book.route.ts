import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/create-book', BookController.createBook);

router.get('/:id', BookController.getSingleBook);

router.patch('/:id', BookController.updateBook);

router.get('/books', BookController.getAllBooks);

router.delete('/:id', BookController.deleteBook);

export const BookRoutes = router;
