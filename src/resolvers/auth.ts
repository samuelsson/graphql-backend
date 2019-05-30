import { User } from '../models/user.interface';
import UserModel from '../models/user.model';
import {
  generateJwtToken,
  hashPassword,
  validatePassword,
} from '../utils/authHelper';

interface AuthResponse {
  user: User;
  token: string;
}

interface LoginInput {
  input: {
    username: string;
    password: string;
  };
}

interface RegisterInput {
  input: User;
}

const login = async (
  parent: object,
  { input }: LoginInput,
): Promise<AuthResponse> => {
  const user = await UserModel.findOne({ username: input.username });

  if (!user) {
    throw new Error('User not found');
  } else if (!(await validatePassword(input.password, user.password))) {
    throw new Error('Wrong credentials');
  }

  const token = generateJwtToken(user);

  return { user, token };
};

const register = async (
  parent: object,
  { input }: RegisterInput,
): Promise<AuthResponse> => {
  input.password = await hashPassword(input.password);
  const newUser = new UserModel(input);
  const user = await newUser.save();
  const token = generateJwtToken(user);

  return { user, token };
};

export default {
  Mutation: { login, register },
};
