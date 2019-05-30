import { model, Schema } from 'mongoose';
import { User } from './user.interface';

const addressSchema = new Schema(
  {
    street: String,
    zipCode: Number,
    city: String,
    country: String,
  },
  { _id: false },
);

const contactInformationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: String,
    email: String,
    address: addressSchema,
  },
  { _id: false },
);

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactInformation: {
      type: contactInformationSchema,
      required: true,
    },
  },
  { timestamps: true },
);

const UserModel = model<User>('User', userSchema);

export default UserModel;
