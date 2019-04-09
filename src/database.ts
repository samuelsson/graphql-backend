import mongoose from 'mongoose';

const database = class Database {
    constructor(private dbHost: string, private dbName: string, private dbPort: number) {
        this.connect(dbHost, dbName, dbPort);
        this.setEvents();
    }

    private connect(dbHost: string, dbName: string, dbPort: number) {
        const url = `mongodb://${dbHost}:${dbPort}/${dbName}`;

        mongoose
            .connect(url, { useNewUrlParser: true })
            .then(() => console.info(`Successfully connected to database ${dbHost}:${dbPort}/${dbName}`))
            .catch(error => {
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    }

    private setEvents() {
        mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
};

export default database;
