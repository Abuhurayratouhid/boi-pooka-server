import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/create-book', BookController.createBook);

router.patch('/:id', BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

router.get('/books', BookController.getAllBooks);

router.patch('/review/:id', BookController.updateReview);

router.get('/book/:id', BookController.getSingleBook);

export const BookRoutes = router;
