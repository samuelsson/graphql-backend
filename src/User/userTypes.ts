const userTypes = `
    type User {
        id: String
        username: String
        firstName: String
        lastName: String
    },

    extend type Query {
        user(id: String!): User
        users: [User]
    },

    extend type Mutation {
        addUser(username: String!, firstName: String!, lastName: String!): User
    }
`;

export default userTypes;
