import { Document } from 'mongoose';

interface Address {
  street: string;
  zipCode: number;
  city: string;
  country: string;
}

interface ContactInformation {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: Address;
}

export interface User extends Document {
  username: string;
  password: string;
  contactInformation: ContactInformation;
}
