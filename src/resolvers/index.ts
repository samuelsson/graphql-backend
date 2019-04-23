import merge from 'deepmerge';

import authResolvers from './auth';
import userResolvers from './user';

const resolvers = [authResolvers, userResolvers];

// Object.assign operator doesn't deep merge, meaning nested properties (query and mutation in our case) are not merged.
// Only the last property is kept. "deepmerge" solves this by recursively merging all objects and nested properties.
export default Object.assign({}, merge.all(resolvers));
