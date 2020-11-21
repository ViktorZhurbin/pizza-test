import { ProductType } from '../../typings';
import { addToCartStorage } from '../../../user/utils';
import { useSession } from 'next-auth/client';
import { addToCart } from '@/modules/user/services';

type Props = {
    product: ProductType;
};

export const CartButton: React.FC<Props> = ({ product }) => {
    const [session] = useSession();
    // const { data, isLoading, mutate } = useContext(UserContext);
    // const cartItem = data?.cart.products.find(({ product }) => {
    //     return product._id === productId;
    // });
    // const isInCart = Boolean(cartItem);

    const handleAddToCart = () =>
        session ? addToCart(product) : addToCartStorage(product);
    // const cartBtnText = isInCart
    //     ? `${getDeclension('item', cartItem.quantity)} in cart`
    //     : 'Add to cart';

    return <button onClick={handleAddToCart}>Add to cart</button>;
};
