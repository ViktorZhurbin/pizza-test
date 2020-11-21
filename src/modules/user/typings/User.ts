import { CartType } from './Cart';
import { OrderType } from './Order';

export type SessionUserType = {
    _id?: string;
    email?: string;
    image?: string;
    name?: string;
    role?: string;
};

export type UserType = SessionUserType & {
    cart: CartType;
    orders: OrderType;
};
