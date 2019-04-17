import { Types } from "mongoose";
import User from './userModel';

// Returns a single user found by ID.
const getUser = async (parent: any, { id }: any) => {
    return await User.findOne({ _id: Types.ObjectId(id) }).exec();
};

// Returns all users
const getUsers = async () => {
    return await User.find({}).exec();
};

// Deletes a user
const deleteUser = async (parent: any, { id }: any): Promise<boolean> => {
    const removedUser = await User.deleteOne({ _id: Types.ObjectId(id) }).exec();
    return !!removedUser.n;
};

export default {
    Query: {
        user: getUser,
        users: getUsers
    },
    Mutation: {
        deleteUser: deleteUser
    }
};
