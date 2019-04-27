import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import config from '../config';

export const hashPassword = async (password: String): Promise<string> => {
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
