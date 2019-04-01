import userTestData from './userTestData'

const schema = `
    type Query {
        user(id: Int!): User
        users: [User]
    },
    type User {
        id: Int
        username: String
        firstName: String
        lastName: String
    }
`;

const getUser = (args: any) => {
    const id = args.id;
    return userTestData.filter(user => user.id === id)[0];
};

const getUsers = () => {
    return userTestData;
};

const endpoints = {
    user: getUser,
    users: getUsers
};

export { schema, endpoints }
