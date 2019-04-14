const authTypes = `
    extend type Mutation {
        login(username: String!, password: String!): String
        register(username: String!, password: String!, firstName: String!, lastName: String!): String
    }
`;

export default authTypes;
