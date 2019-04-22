import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from "graphql-tools";
import merge from 'deepmerge';

// Import all types and resolvers as arrays
import types from './types';
import resolvers from './resolvers';

// A type is only allowed to be defined once, throwing error if merging multiple types.
// We set root types first and having all other types extending these. At least one property needed, hence the _empty.
const rootTypes = `
    type Query { _empty: String }
    type Mutation { _empty: String }
`;

// Object.assign operator doesn't deep merge, meaning nested properties (query and mutation in our case) are not merged.
// Only the last property is kept. "deepmerge" solves this by recursively merging all objects and nested properties.
const graphql = expressGraphQL({
    schema: makeExecutableSchema({
        typeDefs: [rootTypes, ...types],
        resolvers: Object.assign({}, merge.all(resolvers))
    })
});

export default graphql;
