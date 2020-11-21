import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils/string';

import { ProductType } from '../../../product/typings';
import styles from './Product.module.css';
import { LocaleContext } from '@/contexts/Locale';
import { useContext } from 'react';

interface Props {
    product: ProductType;
}

export const Product: React.FC<Props> = ({
    product: { _id, title, price, image },
}) => {
    const { locale } = useContext(LocaleContext);

    return (
        <Link href={`/product/${_id}`}>
            <a className={styles.container}>
                <Image
                    className={styles.image}
                    src={image}
                    width="180"
                    height="180"
                    alt={title}
                    title={title}
                />
                <div className={styles.details}>
                    <div className={styles.price}>
                        {formatPrice(price, locale)}
                    </div>
                    <div className={styles.title}>{title}</div>
                </div>
            </a>
        </Link>
    );
};
