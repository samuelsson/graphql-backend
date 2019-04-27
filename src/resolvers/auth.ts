import { hashPassword, generateJwtToken, validatePassword } from '../utils/authHelper';
import User from '../models/user.model';
import { IUser } from '../models/user.interface';

interface IAuthResponse {
    user: IUser,
    token: string,
}

const login = async (parent: any, {input}: any): Promise<IAuthResponse> => {
    const user = await User.findOne({username: input.username});

    if (!user) {
        throw new Error('User not found');
    } else if (!await validatePassword(input.password, user.password)) {
        throw new Error('Wrong credentials');
    }

    const token = generateJwtToken(user);

    return {user, token}
};

const register = async (parent: any, { input }: any): Promise<IAuthResponse> => {
    input.password = await hashPassword(input.password);
    const newUser = new User(input);
    const user = await newUser.save();
    const token = generateJwtToken(user);

    return { user, token };
};

export default {
    Mutation: {
        login: login,
        register: register
    }
};
