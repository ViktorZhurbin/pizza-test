import { ProductType } from '@/modules/product/typings';
import { fetcher } from '@/utils/api';

export const createProducts = (
    products: ProductType[]
): Promise<ProductType[]> =>
    fetcher('/api/admin/products', 'POST', { products });

export const deleteProducts = (filter = {}): Promise<string> =>
    fetcher('/api/admin/products', 'DELETE', { filter });
