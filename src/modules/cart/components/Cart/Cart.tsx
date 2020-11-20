import { useEffect, useState } from 'react';
import { CART_KEY } from '../../constants';
import { CartItemType } from '../../typings';
import { CartItem } from '../CartItem';
import { EmptyCart } from '../EmptyCart';
import { Summary } from '../Summary';
import styles from './Cart.module.css';

export const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartItemType[] | null>(null);
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem(CART_KEY));
        setCart(cart);
    }, []);

    const handleCheckout = () => null;

    if (!cart?.length) {
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
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
                Checkout
            </button>
            <Summary cart={cart} />
        </div>
    );
};
