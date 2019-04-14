import { Schema, model } from 'mongoose';

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = model('User', UserSchema);

export default User;
