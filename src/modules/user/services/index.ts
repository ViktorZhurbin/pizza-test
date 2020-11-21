import { fetcher } from '@/utils/api';
import { UserType } from '../typings';

export * from './cart';

export const fetchUser = (): Promise<UserType> =>
    fetcher('/api/user/cart', 'GET');
