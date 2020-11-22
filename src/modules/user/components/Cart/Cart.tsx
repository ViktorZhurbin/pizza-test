import { CartItem } from '../CartItem';
import { EmptyCart } from '../EmptyCart';
import { Summary } from '../Summary';
import styles from './Cart.module.css';
import { useUser } from '@/hooks/useUser';

export const Cart: React.FC = () => {
    const { cart } = useUser();

    if (!cart) {
        return <div>Loading...</div>;
    }

    if (!cart?.items?.length) {
        return <EmptyCart />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cart</h1>
            {cart.items.map(({ product, quantity }) => (
                <CartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                    onChange={cart.setCart}
                />
            ))}
            <Summary />
        </div>
    );
};
