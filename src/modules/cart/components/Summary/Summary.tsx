import { CurrencyContext } from '@/contexts/Currency';
import { formatPrice, getDeclension } from '@/utils/string';
import { useContext, useEffect, useState } from 'react';
import { CartItemType } from '../../typings';

import styles from './Summary.module.css';

type Props = {
    cart: CartItemType[];
};

export const Summary: React.FC<Props> = ({ cart }) => {
    const [cartQty, setCartQty] = useState<number>();
    const [cartTotal, setCartTotal] = useState<number>();
    const { currency } = useContext(CurrencyContext);

    useEffect(() => {
        const qty = cart.reduce((qty, item) => qty + item.quantity, 0);
        setCartQty(qty);
    }, [cart]);
    useEffect(() => {
        const total = cart.reduce(
            (total, item) =>
                total + item.quantity * item.product.price[currency],
            0
        );
        setCartTotal(total);
    }, [cart, currency]);

    return cartQty && cartTotal ? (
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
    ) : null;
};
