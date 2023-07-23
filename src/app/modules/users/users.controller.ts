import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/sendResponse';
import status from 'http-status';
import { usersService } from './users.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userInfo } = req.body;
    const result = await usersService.createUser(userInfo);
    // console.log('created user', result);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await usersService.getAllUsers();
    // console.log(result);

    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Users retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await usersService.getSingleUser(id);
    console.log(result);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'User retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await usersService.updateUser(id, updatedData);
    // console.log(id);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await usersService.deleteUser(id);
    // console.log(id);
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const usersController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
