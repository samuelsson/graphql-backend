import { ApolloServer } from 'apollo-server';
import config from './config';
import database from './database';
import typeDefs from './types';
import resolvers from './resolvers';

// Create a connection to the MongoDB
database.connect(config.dbHost, config.dbName, config.dbPort);

// Setting cors options. Some legacy browsers (IE11, various SmartTVs) choke on 204 status
const cors = {
    origin: config.corsOrigin,
    optionsSuccessStatus: 200
};

const server = new ApolloServer({
    cors,
    typeDefs,
    resolvers
});

// Starting the server
server.listen(config.port).then(({ url }) => {
    console.info(`Server running at ${url}`);
});
