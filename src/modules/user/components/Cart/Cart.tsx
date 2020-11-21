import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';

import { CartType } from '../../typings';
import { CartItem } from '../CartItem';
import { EmptyCart } from '../EmptyCart';
import { Summary } from '../Summary';
import styles from './Cart.module.css';
import { fetchUser } from '../../services';
import { getCartStorage, setCartStorage } from '../../utils';

export const Cart: React.FC = () => {
    const [session, loading] = useSession();
    const [cart, setCart] = useState<CartType | null>(null);

    useEffect(() => {
        if (session) {
            fetchUser().then(({ cart }) => {
                setCart(cart);
                setCartStorage(cart);
            });
        }
        if (!loading && !session) {
            const cart = getCartStorage();
            cart && setCart(cart);
        }
    }, [session, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!loading && !cart?.length) {
        return <EmptyCart />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cart</h1>
            {cart.map(({ product, quantity }) => (
                <CartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                    onChange={setCart}
                />
            ))}
            <Link href="/checkout">
                <button className={styles.checkoutBtn}>Checkout</button>
            </Link>
            <Summary cart={cart} />
        </div>
    );
};
