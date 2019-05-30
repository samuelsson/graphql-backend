import { ApolloServer } from 'apollo-server';
import express from 'express';
import config from './config';
import database from './database';
import resolvers from './resolvers';
import typeDefs from './types';
import { getUserFromToken } from './utils/authHelper';
import { User } from './models/user.interface';

export interface Context {
  authToken: string;
  currentUser: User;
}

interface ContextInput {
  req: express.Request;
}

// Create a connection to the MongoDB
database.connect(config.dbHost, config.dbName, config.dbPort);

// Setting cors options. Some legacy browsers
// (IE11, various SmartTVs) choke on 204 status
const cors = {
  origin: config.corsOrigin,
  optionsSuccessStatus: 200,
};

// The context object gets passed to every resolver and, in this case, contains
// info about who made the request. It is generated at every request,
// meaning we don't need any clean up at the end of execution.
const context = async ({ req }: ContextInput): Promise<Context> => {
  const HEADER_NAME = 'authorization';
  const authToken = req.headers[HEADER_NAME] || '';
  const currentUser = await getUserFromToken(authToken);

  return { authToken, currentUser };
};

const server = new ApolloServer({
  cors,
  typeDefs,
  resolvers,
  context,
});

// Starting the server
server.listen(config.port).then(
  ({ url }): void => {
    console.info(`Server running at ${url}`);
  },
);
