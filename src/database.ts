import mongoose from 'mongoose';

const connect = (dbHost: string, dbName: string, dbPort: number): void => {
  const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
  };

  mongoose.connect(url, options);

  mongoose.connection.on(
    'connected',
    console.info.bind(console, `Connected to mongodb at ${url}`),
  );

  mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:'),
  );
};

export default { connect };
