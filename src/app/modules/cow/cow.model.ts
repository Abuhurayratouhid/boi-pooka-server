import { Schema, model } from 'mongoose';
import { ICow } from './cow.interface';
import { Breed, Category, Label, Location } from './cow.enums';

const cowSchema = new Schema<ICow>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, enum: Object.values(Location), required: true },
  breed: { type: String, enum: Object.values(Breed), required: true },
  weight: { type: Number, required: true },
  label: { type: String, enum: Object.values(Label), default: Label.ForSale },
  category: { type: String, enum: Object.values(Category), required: true },
  seller: { type: String, required: true }, // Assuming the seller is a User model
});

export const CowModel = model<ICow>('Cow', cowSchema);
