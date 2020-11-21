import { ProductType } from '@/modules/product/typings';
import { CART_KEY } from '../constants';
import { CartItemType } from '../typings';

export const getCartStorage = (): CartItemType[] | null =>
    JSON.parse(localStorage.getItem(CART_KEY));

export const setCartStorage = (cart: CartItemType[]): void =>
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

const findCartItemIndex = (cart: CartItemType[], id: string): number =>
    cart?.findIndex((item) => item.product._id === id);

export const addToCartStorage = (product: ProductType): void => {
    const storageCart: CartItemType[] = getCartStorage();
    const cart: CartItemType[] = storageCart ?? [];

    const itemIndex = findCartItemIndex(storageCart, product._id);

    if (itemIndex >= 0) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    setCartStorage(cart);
};

export const updateCartQtyStorage = (
    id: string,
    qty: number
): CartItemType[] => {
    const cart = getCartStorage();
    const itemIndex = findCartItemIndex(cart, id);

    cart[itemIndex].quantity = qty;

    setCartStorage(cart);

    return cart;
};

export const deleteCartItemStorage = (id: string): CartItemType[] => {
    const cart = getCartStorage();
    const updatedCart = cart.filter((item) => item.product._id !== id);

    setCartStorage(updatedCart);

    return updatedCart;
};
