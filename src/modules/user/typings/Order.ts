import { CartItemType } from './Cart';

export type OrderItemType = {
    date: Date;
    items: CartItemType[];
};

export type OrderType = OrderItemType[];
