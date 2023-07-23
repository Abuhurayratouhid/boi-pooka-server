import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/sendResponse';
import status from 'http-status';
import { cowService } from './cow.service';
import pick from '../../../shared/pic';
import { paginationFields } from '../../../pagination/paginationFields';
import { ICow } from './cow.interface';

const createCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...cowInfo } = req.body;
    const result = await cowService.createCow(cowInfo);
    // console.log('created user', result);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Cow created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllCows = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filters = pick(req.query, [
      'searchTerm',
      'name',
      'location',
      'breed',
      'category',
    ]);
    const paginationOptions = pick(req.query, paginationFields);
    // console.log(paginationOptions);
    const result = await cowService.getAllCows(filters, paginationOptions);
    // console.log(result);

    sendResponse<ICow[]>(res, {
      success: true,
      statusCode: status.OK,
      message: 'Cows retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await cowService.getSingleCow(id);
    // console.log(result);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Cow retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await cowService.updateCow(id, updatedData);
    // console.log(id);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Cow updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await cowService.deleteCow(id);
    // console.log(id);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Cow deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const cowController = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
