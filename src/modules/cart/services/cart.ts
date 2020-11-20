import { CartItemType } from '@/modules/cart/typings';
import { fetcher } from '@/utils/api';

export const clearCart = (): Promise<CartItemType> =>
    fetcher('/api/user/cart/clear', 'PUT');

export const updateCartQty = (
    productId: string,
    quantity: number
): Promise<CartItemType> =>
    fetcher('/api/user/cart/updateQty', 'PUT', { productId, quantity });

export const deleteCartItem = (productId: string): Promise<CartItemType> =>
    fetcher('/api/user/cart/deleteOne', 'PUT', { productId });

export const addToCart = (productId: string): Promise<CartItemType> =>
    fetcher('/api/user/cart/add', 'PUT', { productId });
