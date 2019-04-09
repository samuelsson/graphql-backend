import dotenv from 'dotenv';

dotenv.config();

export default {
    port: Number(process.env.PORT),
    corsOrigin: process.env.CORS_ORIGIN,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT) || 27017
};
