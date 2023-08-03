import ApiError from '../../../errors/ApiError';
import { IWishList } from './wishList.interface';
import { WishList } from './wishList.model';

const createWishList = async (wish: IWishList) => {
  //   const isExist = await WishList.find({ id: wish.id });

  //   if (isExist) {
  //     throw new ApiError(400, 'Already Exist');
  //   }
  //   console.log('from service', isExist);

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
