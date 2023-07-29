import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { IReview } from '../../../interfaces/common';
import { IBook } from './book.interface';
import { Book } from './book.model';
import { paginationHelpers } from '../../../pagination/paginationCalculate';
import { IPaginationOptions } from '../../../pagination/paginationType';

const createBook = async (book: IBook) => {
  const createdBook = await Book.create(book);

  if (!createBook) throw new ApiError(400, 'Failed to create book');

  return createdBook;
};

const getAllBooks = async (
  filters: { searchTerm?: string },
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const cowSearchableFields = ['title', 'author', 'genre'];

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const total = await Book.countDocuments(whereConditions);
  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  //   console.log(allUsers);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
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
