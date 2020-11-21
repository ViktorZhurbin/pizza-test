import { ProductType } from '@/modules/product/typings';
import { CartType } from '@/modules/user/typings';
import { fetcher } from '@/utils/api';

export const clearCart = (): Promise<CartType> =>
    fetcher('/api/user/cart/clear', 'PUT');

export const updateCartQty = (
    productId: string,
    quantity: number
): Promise<CartType> =>
    fetcher('/api/user/cart/updateQty', 'PUT', { productId, quantity });

export const deleteCartItem = (productId: string): Promise<CartType> =>
    fetcher('/api/user/cart/deleteOne', 'PUT', { productId });

export const addToCart = (product: ProductType): Promise<CartType> =>
    fetcher('/api/user/cart/add', 'PUT', { product });
