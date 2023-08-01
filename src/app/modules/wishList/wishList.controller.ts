import { Request, Response } from 'express';
import catAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { WishListService } from './wishList.service';

const createWishList = catAsync(async (req: Request, res: Response) => {
  const bookInfo = req.body;
  // console.log(bookInfo, 'book info');

  const result = await WishListService.createWishList(bookInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book added to wishList successfully',
    data: result,
  });
});
const getAllWishList = catAsync(async (req: Request, res: Response) => {
  const email = req.params.email;
  // console.log(bookInfo, 'book info');

  const result = await WishListService.getAllWishList(email);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'wishLists retrieved successfully',
    data: result,
  });
});

export const WishListController = {
  createWishList,
  getAllWishList,
};
