import { ProductType } from '@/modules/product/typings';
import { CartType } from '@/modules/user/typings';
import { fetcher } from '@/utils/api';

type CartResponse = {
    data: CartType;
};

export const clearCart = (): Promise<CartResponse> =>
    fetcher('/api/user/cart/clear', 'PUT');

export const updateCartQty = (
    productId: string,
    quantity: number
): Promise<CartResponse> =>
    fetcher('/api/user/cart/updateQty', 'PUT', { productId, quantity });

export const deleteCartItem = (productId: string): Promise<CartResponse> =>
    fetcher('/api/user/cart/delete', 'PUT', { productId });

export const addToCart = (product: ProductType): Promise<CartResponse> =>
    fetcher('/api/user/cart/add', 'PUT', { product });
