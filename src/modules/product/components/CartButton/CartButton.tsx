import { addToCartStorage } from '@/modules/user/utils';
import { addToCart } from '@/modules/user/services';
import { Button } from '@/components/Button';
import { ProductType } from '../../typings';
import { useUser } from '@/hooks/useUser';
import { useSession } from 'next-auth/client';

type Props = {
    product: ProductType;
};

export const CartButton: React.FC<Props> = ({ product }) => {
    const { cart, mutate } = useUser();
    const [session] = useSession();
    // const { data, isLoading, mutate } = useContext(UserContext);
    // const cartItem = data?.cart.products.find(({ product }) => {
    //     return product._id === productId;
    // });
    // const isInCart = Boolean(cartItem);

    const handleAddToCart = async () => {
        if (session) {
            await addToCart(product);
            return mutate();
        }

        const storageCart = addToCartStorage(product);
        cart.setCart(storageCart);
    };
    // const cartBtnText = isInCart
    //     ? `${getDeclension('item', cartItem.quantity)} in cart`
    //     : 'Add to cart';

    return <Button onClick={handleAddToCart}>Add to cart</Button>;
};
