import { LocaleContext } from '@/contexts/Locale';
import { formatPrice, getDeclension } from '@/utils/string';
import { useContext } from 'react';

import styles from './Summary.module.css';

type Props = {
    total: number;
    quantity: number;
    deliveryCost: number;
};

export const Summary: React.FC<Props> = ({ total, quantity, deliveryCost }) => {
    const { locale } = useContext(LocaleContext);

    return quantity && total ? (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Your cart</span>
                <span className={styles.subtitle}>
                    {getDeclension('item', quantity)}
                </span>
            </div>
            <div className={styles.wrapper}>
                <span className={styles.lineTitle}>Items ({quantity})</span>
                <span className={styles.lineValue}>
                    {formatPrice(total, locale)}
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
                    {formatPrice(total + deliveryCost, locale)}
                </span>
            </div>
        </section>
    ) : null;
};
