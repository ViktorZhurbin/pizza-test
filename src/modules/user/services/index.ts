import { fetcher } from '@/utils/api';
import { UserType } from '../typings';

export * from './cart';

export const fetchUser = (): Promise<{ data: UserType }> =>
    fetcher('/api/user', 'GET');
