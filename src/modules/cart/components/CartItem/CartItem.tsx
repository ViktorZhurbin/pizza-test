import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { deleteCartItem } from '@/modules/cart/services';
import { formatPrice } from '@/utils/string';

import { CartItemType } from '../../typings';
import styles from './CartItem.module.css';
import { CurrencyContext } from '@/contexts/Currency';
import { updateCartQtyStorage } from '../../utils';

type Props = CartItemType;

export const CartItem: React.FC<Props> = ({ product, quantity }) => {
    const { _id, title, price, image } = product;
    const [qty, setQty] = useState(quantity.toString());
    const { currency } = useContext(CurrencyContext);

    useEffect(() => {
        if (Number(qty) !== quantity) {
            updateCartQtyStorage(product._id, Number(qty));
        }
    }, [product._id, quantity, qty]);

    const handleDelete = async () => {
        await deleteCartItem(product._id);
    };

    return (
        <div className={styles.container}>
            <Image src={image} width={52} height={64} className={styles.img} />
            <div className={styles.innerWrapper}>
                <span className={styles.price}>
                    {formatPrice(price, currency)}
                </span>
                <Link href={`/product/${_id}`}>
                    <a className={styles.title}>{title}</a>
                </Link>
                <input
                    className={styles.quantity}
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                />
                <span className={styles.delete} onClick={handleDelete}>
                    Delete
                </span>
            </div>
        </div>
    );
};
