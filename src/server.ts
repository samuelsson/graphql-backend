import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    msg: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
    msg: () => {
        return 'Hello world!';
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);

console.log(`Running a GraphQL API server at localhost:4000/graphql`);
