import { ProductType } from '@/modules/product/typings';

export type CartItemType = {
    product: ProductType;
    quantity: number;
};
