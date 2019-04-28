import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import config from '../config';
import User from '../models/user.model';
import { IUser } from '../models/user.interface';

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

export const validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateJwtToken = (user: any): string => {
    return jsonwebtoken.sign(
        { id: user.id },
        config.jwtSecret,
        { expiresIn: config.jwtExpireTime }
    );
};

export const getUserFromToken = async (token: string): Promise<IUser> => {
    try {
        const jwt = jsonwebtoken.verify(token, config.jwtSecret);

        if (typeof jwt !== 'object') {
            return null;
        }

        const userID = (jwt as any).id;

        return await User.findById(userID);
    } catch (e) {
        console.info(e);
        return null;
    }
};
