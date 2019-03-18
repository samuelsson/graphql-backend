import { buildSchema } from 'graphql';

// Construct a schema, using graphql schema language
export const schema = buildSchema(`
  type Query {
    msg: String
  }
`);

// The root provides a resolver function for each API endpoint
export const root = {
    msg: () => {
        return 'Hello world!';
    },
};
