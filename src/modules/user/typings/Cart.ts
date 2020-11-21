import { ProductType } from '@/modules/product/typings';

export type CartItemType = {
    product: ProductType;
    quantity: number;
};

export type PopulatedCartItemType = Omit<CartItemType, 'product'> & {
    product: ProductType;
};
