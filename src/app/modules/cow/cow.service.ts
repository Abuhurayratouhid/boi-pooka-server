import { SortOrder } from 'mongoose';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../pagination/paginationCalculate';

import { IPaginationOptions } from '../../../pagination/paginationType';
import { ICow } from './cow.interface';
import { CowModel } from './cow.model';

const createCow = async (cow: ICow): Promise<ICow | null> => {
  const createdCow = await CowModel.create(cow);
  //   return createdUser;
  if (!createdCow) {
    throw new ApiError(400, 'Failed to create cow');
  }

  return createdCow;
};

const getAllCows = async (
  filters: { searchTerm?: string },
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const cowSearchableFields = ['title', 'author', 'genre'];

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: cowSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const total = await CowModel.countDocuments(whereConditions);
  const result = await CowModel.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  //   console.log(allUsers);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await CowModel.findById(id);

  return result;
};

const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const result = await CowModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteCow = async (id: string): Promise<ICow | null> => {
  const result = await CowModel.findByIdAndDelete(id);
  return result;
};

export const cowService = {
  createCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
