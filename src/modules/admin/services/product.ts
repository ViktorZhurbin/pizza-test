import { ProductType } from '@/modules/home/typings';
import { ApiResponse, GenericObject } from '@/typings';
import { fetcher } from '@/utils/api';

export const createProducts = (products: ProductType[]): Promise<ApiResponse> =>
    fetcher('/api/admin/products/create', 'POST', { products });

export const deleteManyProducts = (
    filter: GenericObject
): Promise<ApiResponse> =>
    fetcher('/api/admin/products/deleteMany', 'DELETE', { filter });
