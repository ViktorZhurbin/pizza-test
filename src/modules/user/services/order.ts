import { fetcher } from '@/utils/api';
import { CartType, OrderType } from '../typings';

export const addOrder = (cart: CartType): Promise<{ data: OrderType }> =>
    fetcher('/api/user/order/add', 'PUT', { cart });
