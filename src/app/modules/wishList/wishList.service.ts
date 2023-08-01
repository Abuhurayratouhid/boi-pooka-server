import ApiError from '../../../errors/ApiError';
import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';

const createWishList = async (wish: IWishList) => {
  console.log('from service', wish);

  const createdWishList = await WishList.create(wish);

  if (!createdWishList) throw new ApiError(400, 'Failed to add wishList');

  return createdWishList;
};

const getAllWishList = async (email: string) => {
  const createdWishList = await WishList.find({ creatorEmail: email });
  //   console.log('from service all wishList', createdWishList);

  if (!createdWishList) throw new ApiError(400, 'Failed to add wishList');

  return createdWishList;
};

export const WishListService = {
  createWishList,
  getAllWishList,
};
