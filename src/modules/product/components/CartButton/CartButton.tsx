import { ProductType } from '@/modules/home/typings';

export const CartButton: React.FC<{ product: ProductType }> = ({ product }) => {
    // const { data, isLoading, mutate } = useContext(UserContext);
    // const cartItem = data?.cart.products.find(({ product }) => {
    //     return product._id === productId;
    // });
    // const isInCart = Boolean(cartItem);

    const handleAddToCart = () => {
        let products = [];
        if (localStorage.getItem('cart')) {
            products = JSON.parse(localStorage.getItem('cart'));
        }
        products.push({ product });
        localStorage.setItem('cart', JSON.stringify(products));
    };
    // const cartBtnText = isInCart
    //     ? `${getDeclension('item', cartItem.quantity)} in cart`
    //     : 'Add to cart';

    return <button onClick={handleAddToCart}>Add to cart</button>;
};
