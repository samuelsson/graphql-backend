import { gql } from 'apollo-server';

import authTypes from './auth';
import userTypes from './user';

// A type is only allowed to be defined once, throwing error if merging multiple
// types. We set root types first and having all other types extending these. At
// least one property needed, hence the _empty.
const rootTypes = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const types = [rootTypes, authTypes, userTypes];

export default types;
