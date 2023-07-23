import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './users.interface';
import { User } from './users.model';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);
  //   return createdUser;
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user');
  }

  return createdUser;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const allUsers = await User.find().exec();
  //   console.log(allUsers);
  return allUsers;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);

  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const usersService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
