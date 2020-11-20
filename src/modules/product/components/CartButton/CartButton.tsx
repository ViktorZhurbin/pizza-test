import { ProductType } from '../../typings';
import { addToCartStorage } from '../../../cart/utils';

type Props = {
    product: ProductType;
};

export const CartButton: React.FC<Props> = ({ product }) => {
    // const { data, isLoading, mutate } = useContext(UserContext);
    // const cartItem = data?.cart.products.find(({ product }) => {
    //     return product._id === productId;
    // });
    // const isInCart = Boolean(cartItem);

    const handleAddToCart = () => addToCartStorage(product);
    // const cartBtnText = isInCart
    //     ? `${getDeclension('item', cartItem.quantity)} in cart`
    //     : 'Add to cart';

    return <button onClick={handleAddToCart}>Add to cart</button>;
};
