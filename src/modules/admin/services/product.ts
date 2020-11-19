import { ProductType } from '@/modules/home/typings';
import { ApiResponse } from '@/typings';
import { fetcher } from '@/utils/api';

export const createProducts = (products: ProductType[]): Promise<ApiResponse> =>
    fetcher('/api/admin/products', 'POST', { products });

export const deleteProducts = (filter = {}): Promise<ApiResponse> =>
    fetcher('/api/admin/products', 'DELETE', { filter });
