import { Types } from 'mongoose';
import { User } from '../models/user.interface';
import UserModel from '../models/user.model';
import { authenticated } from '../utils/authGuards';

// Returns a single user found by ID.
const getUser = async (parent: object, { id }: User): Promise<User> => {
  return await UserModel.findOne({ _id: Types.ObjectId(id) }).exec();
};

// Returns all users
const getUsers = async (): Promise<User[]> => {
  return await UserModel.find({}).exec();
};

// Deletes a user
const deleteUser = async (parent: object, { id }: User): Promise<boolean> => {
  const removedUser = await UserModel.deleteOne({
    _id: Types.ObjectId(id),
  }).exec();
  return !!removedUser.n;
};

export default {
  Mutation: {
    deleteUser,
  },
  Query: {
    user: getUser,
    users: authenticated(getUsers),
  },
};
