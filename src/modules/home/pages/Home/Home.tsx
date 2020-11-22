import { Layout } from '@/components/Layout';

import { Product } from '../../components/Product';
import { ProductType } from '../../../product/typings';

import styles from './Home.module.css';

type Props = {
    products: ProductType[];
};

export const Home: React.FC<Props> = ({ products }) => {
    return (
        Array.isArray(products) && (
            <Layout>
                <main className={styles.main}>
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </main>
            </Layout>
        )
    );
};
