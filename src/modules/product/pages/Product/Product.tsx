import Image from 'next/image';

import { Layout } from '@/components/Layout';
import { formatPrice } from '@/utils/string';

import { ProductType } from '@/modules/product/typings';
import styles from './Product.module.css';
import { CartButton } from '../../components/CartButton';
import { useContext } from 'react';
import { LocaleContext } from '@/contexts/Locale';

type Props = {
    product: ProductType;
};

export const Product: React.FC<Props> = ({ product }) => {
    const { image, title, description, price } = product;
    const { locale } = useContext(LocaleContext);

    return (
        <Layout stickyItem={<CartButton product={product} />}>
            <div className={styles.container}>
                <Image
                    src={image}
                    width="400"
                    height="415"
                    className={styles.image}
                />
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.price}>
                    {formatPrice(price, locale)}
                </span>
                <h2 className={styles.title}>Description</h2>
                <div className={styles.description}>{description}</div>
            </div>
        </Layout>
    );
};
