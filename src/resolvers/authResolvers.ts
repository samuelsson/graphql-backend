import User from '../models/userModel';

const login = (parent: any, { input }: any) => {
    console.log('login', input);
};

const register = async (parent: any, { input }: any) => {
    // TODO: Hash password and return JWT instead of User object when implemented :)
    input.password = 'plsHashMe';
    const user = new User(input);

    await user.save();
    return 'This will be our JWT returned';
};

export default {
    Mutation: {
        login: login,
        register: register
    }
};
