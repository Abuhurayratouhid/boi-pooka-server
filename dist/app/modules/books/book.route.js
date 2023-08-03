"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-book', book_controller_1.BookController.createBook);
router.patch('/:id', book_controller_1.BookController.updateBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
router.get('/books', book_controller_1.BookController.getAllBooks);
router.patch('/review/:id', book_controller_1.BookController.updateReview);
router.get('/book/:id', book_controller_1.BookController.getSingleBook);
exports.BookRoutes = router;
