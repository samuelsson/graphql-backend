import { Document } from 'mongoose';

interface IAddress {
    street: string;
    zipCode: number;
    city: string;
    country: string;
}

interface IContactInformation {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: IAddress;
}

export interface IUser extends Document {
    username: string;
    password: string;
    contactInformation: IContactInformation;
}
