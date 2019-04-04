import dotenv from 'dotenv';

dotenv.config();

export default {
    port: Number(process.env.PORT),
    corsOrigin: process.env.CORS_ORIGIN
};