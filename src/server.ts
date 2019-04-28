import { ApolloServer } from 'apollo-server';
import config from './config';
import database from './database';
import typeDefs from './types';
import resolvers from './resolvers';
import { getUserFromToken } from './utils/authHelper';

// Create a connection to the MongoDB
database.connect(config.dbHost, config.dbName, config.dbPort);

// Setting cors options. Some legacy browsers (IE11, various SmartTVs) choke on 204 status
const cors = {
    origin: config.corsOrigin,
    optionsSuccessStatus: 200
};

// The context object gets passed to every resolver and, in this case, contains info about who made the request.
// It is generated at every request, meaning we don't need any clean up at the end of execution.
const context = async ({ req }: any) => {
    const HEADER_NAME = 'authorization';
    const authToken = req.headers[HEADER_NAME] || '';
    const currentUser = await getUserFromToken(authToken);

    return { authToken, currentUser };
};

const server = new ApolloServer({
    cors,
    typeDefs,
    resolvers,
    context
});

// Starting the server
server.listen(config.port).then(({ url }) => {
    console.info(`Server running at ${url}`);
});
