const login = (parent: any, args: any) => {
    console.log('login', args);
};

const register = (parent: any, args: any) => {
    console.log('register', args);
};

export default {
    Mutation: {
        login: login,
        register: register
    }
};
