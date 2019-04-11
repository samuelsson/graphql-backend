const schema: string = `
    type User {
        id: String
        username: String
        firstName: String
        lastName: String
    },

    type Query {
        user(id: String!): User
        users: [User]
    },

    type Mutation {
        addUser(username: String!, firstName: String!, lastName: String!): User
    }
`;

export default schema;
