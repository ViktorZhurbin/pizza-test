import useSwr from 'swr';

import { Layout } from '@/components/Layout';
import { fetcher } from '@/utils/api';

import { Product } from '../../components/Product';
import { ProductType } from '../../../product/typings';

import styles from './Home.module.css';

export const HomePage: React.FC = () => {
    const { data, error } = useSwr<ProductType[]>('/api/products', fetcher);

    if (!data && !error) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        Array.isArray(data) &&
        !error && (
            <Layout>
                <main className={styles.main}>
                    {data.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </main>
            </Layout>
        )
    );
};
