import { Types } from "mongoose";
import User from './userModel';

// Returns a single user found by ID.
const getUser = (args: any): Promise<object> => {
    const id = Types.ObjectId(args.id);

    return new Promise((resolve, reject) => {
        User.findOne({ _id: id }, (err, res) => err ? reject(err) : resolve(res));
    });
};

// Returns all users
const getUsers = (): Promise<object> => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, res) => err ? reject(err) : resolve(res));
    });
};

// Creates a new user
const addUser = (parent: any, args: any): Promise<object> => {
    const user = new User({
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
