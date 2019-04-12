import cors from 'cors';
import Server from './server';
import database from './database';
import graphql from './graphql';
import config from './config';

// Create a connection to the MongoDB
database.connect(config.dbHost, config.dbName, config.dbPort);

// Initiate a new Server object
const server = new Server(config.port);

const corsOptions = {
    origin: config.corsOrigin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Add middleware to our server
server.app.use(cors(corsOptions));
server.app.use('/api', graphql);

server.start();
