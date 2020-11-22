import { CartItem } from '../CartItem';
import { EmptyCart } from '../EmptyCart';
import { Summary } from '../Summary';
import styles from './Cart.module.css';
import { useCart } from '@/hooks/useCart';

export const Cart: React.FC = () => {
    const { cart, setCart, isLoading } = useCart();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && !cart?.length) {
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
            <Summary cart={cart} />
        </div>
    );
};
