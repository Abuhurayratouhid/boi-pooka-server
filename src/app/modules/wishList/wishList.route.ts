import express from 'express';
import { WishListController } from './wishList.controller';

const router = express.Router();

router.post('/addWishList', WishListController.createWishList);

// router.patch('/:id', BookController.updateBook);

// router.delete('/:id', BookController.deleteBook);

router.get('/wishList/:email', WishListController.getAllWishList);

// router.patch('/review/:id', BookController.updateReview);

// router.get('/book/:id', BookController.getSingleBook);

export const WishListRoutes = router;
