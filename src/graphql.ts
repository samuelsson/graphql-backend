import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

// Construct a schema, using graphql schema language
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

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});

export default graphql;