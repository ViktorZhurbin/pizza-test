import { CurrencyContext } from '@/contexts/Currency';
import { formatPrice, getDeclension } from '@/utils/string';
import { useContext } from 'react';
import { CartItemType } from '../../typings';

import styles from './Summary.module.css';

type Props = {
    cart: CartItemType[];
};

export const Summary: React.FC<Props> = ({ cart }) => {
    const { currency } = useContext(CurrencyContext);
    const cartTotal = cart.reduce(
        (total, item) => total + item.product.price[currency],
        0
    );
    const cartQty = cart.reduce((qty, item) => qty + item.quantity, 0);

    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.title}>Your Cart</span>
                <span className={styles.subtitle}>
                    {getDeclension('item', cartQty)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.title}>Total</span>
                <span className={styles.title}>
                    {formatPrice(cartTotal, currency)}
                </span>
            </div>
        </>
    );
};
