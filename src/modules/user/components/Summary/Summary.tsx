import { LocaleContext } from '@/contexts/Locale';
import { formatPrice, getDeclension } from '@/utils/string';
import { useContext, useEffect, useState } from 'react';
import { DELIVERY_COST } from '../../constants';
import { CartType } from '../../typings';

import styles from './Summary.module.css';

type Props = {
    cart: CartType;
};

export const Summary: React.FC<Props> = ({ cart }) => {
    const [cartQty, setCartQty] = useState<number>();
    const [cartTotal, setCartTotal] = useState<number>();
    const { locale, currency } = useContext(LocaleContext);
    const [deliveryCost, setDeliveryCost] = useState(DELIVERY_COST[currency]);

    useEffect(() => {
        setDeliveryCost(DELIVERY_COST[currency]);
    }, [currency]);

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
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Your cart</span>
                <span className={styles.subtitle}>
                    {getDeclension('item', cartQty)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.lineTitle}>Items ({cartQty})</span>
                <span className={styles.lineValue}>
                    {formatPrice(cartTotal, locale)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.lineTitle}>Delivery cost</span>
                <span className={styles.lineValue}>
                    {formatPrice(deliveryCost, locale)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.title}>Total</span>
                <span className={styles.title}>
                    {formatPrice(cartTotal + deliveryCost, locale)}
                </span>
            </div>
        </section>
    ) : null;
};
