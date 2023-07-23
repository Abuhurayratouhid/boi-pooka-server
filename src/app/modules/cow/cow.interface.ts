import { Model } from 'mongoose';
import { Breed, Category, Label } from './cow.enums';
import exp from 'constants';

export interface ICow {
  name: string;
  age: number;
  price: number;
  location: Location;
  breed: Breed;
  weight: number;
  label: Label;
  category: Category;
  seller: string; // Reference to the seller's ID
}

export type CowModel = Model<ICow, Record<string, unknown>>;
