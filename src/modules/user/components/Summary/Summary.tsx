import { LocaleContext } from '@/contexts/Locale';
import { useUser } from '@/hooks/useUser';
import { formatPrice, getDeclension } from '@/utils/string';
import { useContext } from 'react';

import styles from './Summary.module.css';

export const Summary: React.FC = () => {
    const { locale } = useContext(LocaleContext);
    const { cart } = useUser();

    return cart?.quantity && cart?.total ? (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Your cart</span>
                <span className={styles.subtitle}>
                    {getDeclension('item', cart?.quantity)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.lineTitle}>
                    Items ({cart?.quantity})
                </span>
                <span className={styles.lineValue}>
                    {formatPrice(cart?.total, locale)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.lineTitle}>Delivery cost</span>
                <span className={styles.lineValue}>
                    {formatPrice(cart?.deliveryCost, locale)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.title}>Total</span>
                <span className={styles.title}>
                    {formatPrice(cart?.total + cart?.deliveryCost, locale)}
                </span>
            </div>
        </section>
    ) : null;
};
