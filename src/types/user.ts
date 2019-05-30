import { gql } from 'apollo-server';

const userTypes = gql`
  type Address {
    street: String
    zipCode: String
    city: String
    country: String
  }

  type ContactInformation {
    firstName: String!
    lastName: String!
    address: Address
    phone: String
    email: String
  }

  type User {
    id: ID!
    username: String!
    contactInformation: ContactInformation!
  }

  extend type Query {
    user(id: ID!): User
    users: [User]
  }

  extend type Mutation {
    deleteUser(id: ID!): Boolean
  }
`;

export default userTypes;
