import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { formatPrice } from '@/utils/string';
import { CurrencyContext } from '@/contexts/Currency';

import { CartType } from '../../typings';
import styles from './CartItem.module.css';
import { deleteCartItemStorage, updateCartQtyStorage } from '../../utils';
import { ProductType } from '@/modules/product/typings';
import { useSession } from 'next-auth/client';
import { updateCartQty, deleteCartItem } from '../../services';
import { useDebounce } from '@/hooks/useDebounce';

type Props = {
    product: ProductType;
    quantity: number;
    onChange(cart: CartType): void;
};

export const CartItem: React.FC<Props> = ({ product, quantity, onChange }) => {
    const [session, loading] = useSession();
    const isAuth = !loading && Boolean(session);
    const { _id, title, price, image } = product;
    const [qty, setQty] = useState(quantity.toString());
    const { currency } = useContext(CurrencyContext);

    const updatedQty = useDebounce<number>(Number(qty), 500);

    useEffect(() => {
        if (updatedQty && updatedQty !== quantity) {
            if (isAuth) {
                updateCartQty(product._id, updatedQty).then(({ data }) =>
                    onChange(data)
                );
            } else {
                const updatedCart = updateCartQtyStorage(
                    product._id,
                    updatedQty
                );
                onChange(updatedCart);
            }
        }
    }, [product._id, quantity, updatedQty, onChange, isAuth]);

    const handleDelete = async () => {
        let updatedCart;
        if (isAuth) {
            const { data } = await deleteCartItem(product._id);
            updatedCart = data;
        } else {
            updatedCart = deleteCartItemStorage(product._id);
        }
        onChange(updatedCart);
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
