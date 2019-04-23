import { gql } from 'apollo-server';

const authTypes = gql`
    input AddressInput {
        street: String
        zipCode: String
        city: String
        country: String
    }

    input ContactInformationInput {
        firstName: String!
        lastName: String!
        address: AddressInput
        phone: String
        email: String
    }

    input RegisterUser {
        username: String!
        password: String!
        contactInformation: ContactInformationInput!
    }

    input LoginUser {
        username: String!
        password: String!
    }

    extend type Mutation {
        login(input: LoginUser!): String
        register(input: RegisterUser!): String
    }
`;

export default authTypes;
