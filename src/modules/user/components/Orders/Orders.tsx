import Link from 'next/link';
import { LocaleContext } from '@/contexts/Locale';
import { formatPrice } from '@/utils/string';
import { formatDate } from '@/utils/string/formatDate';
import { useContext } from 'react';
import { OrderType } from '../../typings';

import styles from './Orders.module.css';

type Props = {
    orders: OrderType;
};

export const Orders: React.FC<Props> = ({ orders }) => {
    const { locale } = useContext(LocaleContext);
    return (
        <section>
            <h1 className={styles.title}>My Orders</h1>
            {orders?.map((order) => (
                <div key={String(order.date)} className={styles.order}>
                    <div className={styles.date}>
                        {formatDate(order.date, locale)}
                    </div>
                    <div>
                        {order.items.map((item) => (
                            <Link
                                href={`/product/${item.product._id}`}
                                key={item.product._id}
                            >
                                <a className={styles.orderItem}>
                                    <span className={styles.price}>
                                        {formatPrice(
                                            item.product.price,
                                            locale
                                        )}
                                    </span>
                                    <span
                                        className={styles.product}
                                    >{`${item.quantity} x ${item.product.title}`}</span>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};
