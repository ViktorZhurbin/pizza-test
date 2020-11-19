import Image from 'next/image';

import { Layout } from '@/components/Layout';
import { formatPrice } from '@/utils/string';

import { ProductType } from '@/modules/home/typings';
import styles from './Product.module.css';
import { useContext } from 'react';
import { CurrencyContext } from '@/contexts/Currency';
import { CartButton } from '../../components/CartButton';

type Props = {
    product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
    const { image, title, description, price } = product;
    const { currency } = useContext(CurrencyContext);

    return (
        <Layout>
            <div className={styles.container}>
                <Image
                    src={image}
                    width="400"
                    height="415"
                    className={styles.image}
                />
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.price}>
                    {formatPrice(price[currency], currency)}
                </span>
                <h2 className={styles.title}>Description</h2>
                <div className={styles.description}>{description}</div>
            </div>
            <CartButton product={product} />
        </Layout>
    );
};
