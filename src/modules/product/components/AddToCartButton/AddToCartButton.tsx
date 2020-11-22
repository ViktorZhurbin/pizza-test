import { addToCartStorage } from '@/modules/user/utils';
import { addToCart } from '@/modules/user/services';
import { Button } from '@/components/Button';
import { ProductType } from '../../typings';
import { useUser } from '@/hooks/useUser';
import { useSession } from 'next-auth/client';
import { getDeclension } from '@/utils/string';

import styles from './AddToCartButton.module.css';

type Props = {
    product: ProductType;
};

export const AddToCartButton: React.FC<Props> = ({ product }) => {
    const { cart, mutate } = useUser();
    const [session] = useSession();
    const cartItem = cart?.items?.find((item) => {
        return item.product._id === product._id;
    });
    const isInCart = Boolean(cartItem);

    const handleAddToCart = async () => {
        if (session) {
            await addToCart(product);
            return mutate();
        }

        const storageCart = addToCartStorage(product);
        cart.setCart(storageCart);
    };

    return isInCart ? (
        <div className={styles.splitBtn}>
            <Button route="/cart" color="green">
                <div className={styles.btnText}>
                    {getDeclension('item', cartItem.quantity)} in cart
                    <div className={styles.goToCart}>Go to cart</div>
                </div>
            </Button>
            <Button onClick={handleAddToCart}>+1</Button>
        </div>
    ) : (
        <Button onClick={handleAddToCart}>Add to cart</Button>
    );
};
