import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    id: { type: String },
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
  }
);

export const Book = model<IBook>('Book', bookSchema);
