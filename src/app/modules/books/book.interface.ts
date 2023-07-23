import { Model } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  imageUrl: string;
  wishList: boolean; // default value will be false
  isReading: boolean; // default value will be false
  readSoon: boolean; // default value will be false
  isCompleted: boolean; // default value will be false
  reviews: string[];
}

export type BookModel = Model<IBook, Record<string, unknown>>;
