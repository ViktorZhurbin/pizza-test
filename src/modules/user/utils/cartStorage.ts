import { ProductType } from '@/modules/product/typings';
import { CART_KEY } from '../constants';
import { CartType } from '../typings';

export const getCartStorage = (): CartType | null =>
    JSON.parse(localStorage.getItem(CART_KEY)) || [];

export const setCartStorage = (cart: CartType): void =>
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

const findCartItemIndex = (cart: CartType, id: string): number =>
    cart?.findIndex((item) => item.product._id === id);

export const addToCartStorage = (product: ProductType): CartType => {
    const storageCart: CartType = getCartStorage();

    const itemIndex = findCartItemIndex(storageCart, product._id);

    if (itemIndex >= 0) {
        storageCart[itemIndex].quantity += 1;
    } else {
        storageCart.push({ product, quantity: 1 });
    }

    setCartStorage(storageCart);

    return storageCart;
};

export const updateCartQtyStorage = (id: string, qty: number): CartType => {
    const cart = getCartStorage();
    const itemIndex = findCartItemIndex(cart, id);

    cart[itemIndex].quantity = qty;

    setCartStorage(cart);

    return cart;
};

export const deleteCartItemStorage = (id: string): CartType => {
    const cart = getCartStorage();
    const updatedCart = cart.filter((item) => item.product._id !== id);

    setCartStorage(updatedCart);

    return updatedCart;
};
