import ApiError from '../../../errors/ApiError';
import { IReview } from '../../../interfaces/common';
import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (book: IBook) => {
  const createdBook = await Book.create(book);

  if (!createBook) throw new ApiError(400, 'Failed to create book');

  return createdBook;
};

const getAllBooks = async () => {
  const allBooks = await Book.find({}).sort({ createdAt: -1 });

  //   console.log(allBooks);

  return allBooks;
};
const getSingleBook = async (id: string) => {
  const singleBook = await Book.find({ _id: id });

  return singleBook;
};

const updateBook = async (id: string, updatedData: Partial<IBook>) => {
  const updatedBook = await Book.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });

  return updatedBook;
};

const updateReview = async (id: string, newReview: IReview) => {
  const updatedBook = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: newReview } }
  );

  return updatedBook;
};

const deleteBook = async (id: string) => {
  const deletedBook = await Book.findByIdAndDelete(id);

  return deletedBook;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  updateReview,
};
