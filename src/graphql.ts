import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

import * as User from './User/user'

// Construct a schema, using graphql schema language
const schemas = [
    User.schema
];

const schema = buildSchema(schemas.join());

// The root provides a resolver function for each API endpoint
const root = Object.assign({}, User.endpoints);

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export default graphql;
