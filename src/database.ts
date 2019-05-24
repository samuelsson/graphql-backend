import mongoose from 'mongoose';

const connect = (dbHost: string, dbName: string, dbPort: number): void => {
    const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
    const options = {
        useNewUrlParser: true,
        useCreateIndex: true,
    };

    mongoose
        .connect(url, options)
        .then(() => console.info(`Successfully connected to database ${dbHost}:${dbPort}/${dbName}`))
        .catch((error) => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

export default { connect };
