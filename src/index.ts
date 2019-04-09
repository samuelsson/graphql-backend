import cors from 'cors';
import Server from './server';
import Database from './database';
import graphql from './graphql';
import config from './config';

const server = new Server(config.port);
const database = new Database(config.dbHost, config.dbName, config.dbPort);

const corsOptions = {
    origin: config.corsOrigin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.app.use(cors(corsOptions));
server.app.use('/api', graphql);

server.start();
