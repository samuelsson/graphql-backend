import { Types } from "mongoose";
import User from './userModel';

// Returns a single user found by ID.
const getUser = async (parent: any, args: any, context: any, info: any) => {
    const _id = Types.ObjectId(args.id);

    return await User.findOne({ _id }).exec();
};

// Returns all users
const getUsers = async () => {
    return await User.find({}).exec();
};

// Creates a new user
const addUser = async (parent: any, args: any): Promise<object> => {
    const user = await new User({
        username: args.username,
        password: args.password,
        firstName: args.firstName,
        lastName: args.lastName
    });

    return new Promise((resolve, reject) => {
        user.save((err, res) => err ? reject(err) : resolve(res));
    });
};

export default {
    Query: {
        user: getUser,
        users: getUsers
    },
    Mutation: {
        addUser: addUser
    }
};
