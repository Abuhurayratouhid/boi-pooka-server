import { Schema, model } from 'mongoose';

import { IWishList, wishListModel } from './wishList.interface';

const wishListSchema = new Schema<IWishList>(
  {
    title: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    imageUrl: { type: String, required: true },
    wishList: { type: Boolean, default: false },
    isReading: { type: Boolean, default: false },
    readSoon: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    reviews: [
      {
        comment: { type: String },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const WishList = model<IWishList, wishListModel>(
  'wishList',
  wishListSchema
);
