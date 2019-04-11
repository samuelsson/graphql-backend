import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

import User from './User/user';

// Construct a schema, using graphql schema language
const schemas: string[] = [
    User.schema
];

// Join all schemas into one, works like this until we've got more
const schema = buildSchema(schemas.join());

// The root provides a resolver function for each API endpoint
// Only User atm :)
const root = Object.assign({}, User.resolvers);

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export default graphql;
