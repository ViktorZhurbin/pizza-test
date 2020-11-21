import mongoose from 'mongoose';

import { UserType } from '@/modules/user/typings';
import { productSchema } from './Product';

export type UserDocumentType = UserType & mongoose.Document;

export const userSchema = new mongoose.Schema<UserType>({
    email: String,
    name: String,
    role: String,
    cart: [
        {
            product: productSchema,
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
});

export const UserModel =
    mongoose.models?.User ||
    mongoose.model<UserDocumentType>('User', userSchema);
