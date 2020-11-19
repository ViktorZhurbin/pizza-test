import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { formatPrice } from '../../../../utils/string';

import { ProductType } from '../../typings';
import styles from './Product.module.css';

interface Props {
    product: ProductType;
}

export const Product: React.FC<Props> = ({
    product: { id, title, price, image },
}) => {
    return (
        <Link href={`/product/${id}`}>
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
                    <div className={styles.price}>{formatPrice(price)}</div>
                    <div className={styles.title}>{title}</div>
                </div>
            </a>
        </Link>
    );
};
