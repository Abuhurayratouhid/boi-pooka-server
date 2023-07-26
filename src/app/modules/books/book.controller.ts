import { Request, Response } from 'express';
import catAsync from '../../../shared/catchAsync';
import { BookService } from './book.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
// import { IBook } from './book.interface';

const createBook = catAsync(async (req: Request, res: Response) => {
  const bookInfo = req.body;
  console.log(bookInfo, 'book info');

  const result = await BookService.createBook(bookInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = catAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getSingleBook = catAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);
  //   console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result[0],
  });
});

const updateBook = catAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BookService.updateBook(id, updatedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book edited successfully',
    data: result,
  });
  // console.log(result);
});

const deleteBook = catAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.deleteBook(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

const updateReview = catAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  // console.log('ID:', id, 'UpdateData:', updatedData);

  const result = await BookService.updateReview(id, updatedData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book edited successfully',
    data: result,
  });
  // console.log(result);
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  updateReview,
};
