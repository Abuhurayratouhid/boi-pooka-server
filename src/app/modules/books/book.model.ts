import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    imageUrl: { type: String, required: true },
    wishList: { type: Boolean, default: false },
    isReading: { type: Boolean, default: false },
    readSoon: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    reviews: [{ type: String }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>('Book', bookSchema);
