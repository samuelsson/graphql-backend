import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from "graphql-tools";
import merge from 'deepmerge';

import { userTypes, userResolvers } from './User/user';
import { authTypes, authResolvers } from './auth/auth';

// A type is only allowed to be defined once, throwing error if merging multiple types.
// We set root types first and having all other types extending these. At least one property needed, hence the _empty.
const rootTypes = `
    type Query { _empty: String }
    type Mutation { _empty: String }
`;

// Put all types and resolvers into their own arrays. Used for creating a single executable schema in a simple way.
const typeDefs = [userTypes, authTypes];
const resolvers = [userResolvers, authResolvers];

// assign operator doesn't deep merge, meaning nested properties (query and mutation in our case) are not merged. Only
// the last property is kept. "deepmerge" solves this by recursively merging all objects and nested properties.
const graphql = expressGraphQL({
    schema: makeExecutableSchema({
        typeDefs: [rootTypes, ...typeDefs],
        resolvers: Object.assign({}, merge.all(resolvers))
    }),
    graphiql: true,
});

export default graphql;
