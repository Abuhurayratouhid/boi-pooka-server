import { Model } from 'mongoose';

interface IReview {
  comment: string;
}

export interface IBook {
  title: string;
  author: string;
  creatorEmail: string;
  genre: string;
  publicationDate: string;
  imageUrl: string;
  wishList: boolean; // default value will be false
  isReading: boolean; // default value will be false
  readSoon: boolean; // default value will be false
  isCompleted: boolean; // default value will be false
  reviews: IReview[]; // it will be array of object
}

export type BookModel = Model<IBook, Record<string, unknown>>;
