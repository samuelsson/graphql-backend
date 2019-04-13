import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from "graphql-tools";

import { userTypes, userResolvers } from './User/user';

// Merge all types into an array and all resolvers into an object. Used for creating a single executable schema.
const typeDefs = [userTypes];
const resolvers = Object.assign({}, userResolvers);

const graphql = expressGraphQL({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true,
});

export default graphql;
