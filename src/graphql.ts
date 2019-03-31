import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

import * as User from './User/user'

// Construct a schema, using graphql schema language
const schema = buildSchema(User.userQuery);

// The root provides a resolver function for each API endpoint
const root = {
    user: User.getUser,
    users: User.getUsers
};

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export default graphql;