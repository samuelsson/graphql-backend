import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import config from '../config';
import { User } from '../models/user.interface';
import UserModel from '../models/user.model';

interface Jwt {
  id: string;
}

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const validatePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateJwtToken = (user: User): string => {
  return jsonwebtoken.sign({ id: user.id }, config.jwtSecret, {
    expiresIn: config.jwtExpireTime,
  });
};

export const getUserFromToken = async (token: string): Promise<User> => {
  try {
    const jwt = jsonwebtoken.verify(token, config.jwtSecret);

    if (typeof jwt !== 'object') {
      return null;
    }

    const userID = (jwt as Jwt).id;

    return await UserModel.findById(userID);
  } catch (e) {
    return null;
  }
};
