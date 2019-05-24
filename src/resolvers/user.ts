import { Types } from 'mongoose';
import { IUser } from '../models/user.interface';
import User from '../models/user.model';
import { authenticated } from '../utils/authGuards';

// Returns a single user found by ID.
const getUser = async (parent: any, { id }: any): Promise<IUser> => {
    return await User.findOne({ _id: Types.ObjectId(id) }).exec();
};

// Returns all users
const getUsers = async (): Promise<IUser[]> => {
    return await User.find({}).exec();
};

// Deletes a user
const deleteUser = async (parent: any, { id }: any): Promise<boolean> => {
    const removedUser = await User.deleteOne({ _id: Types.ObjectId(id) }).exec();
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
