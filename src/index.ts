import Server from './server';
import graphqlHTTP from 'express-graphql';
import * as graphql from './graphql';

const server = Server.init(4000);

server.app.use('/graphql', graphqlHTTP({
    schema: graphql.schema,
    rootValue: graphql.root,
    graphiql: true,
}));

server.start();
