import { ProductType } from '@/modules/product/typings';
import { CART_KEY } from '../constants';
import { CartItemType } from '../typings';

const getCart = (): CartItemType[] | null =>
    JSON.parse(localStorage.getItem(CART_KEY));

const setCart = (cart: CartItemType[]): void =>
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

const findCartItem = (cart: CartItemType[], id: string) =>
    cart.findIndex((item) => item.product._id === id);

export const addToCartStorage = (product: ProductType): void => {
    const storageCart: CartItemType[] = getCart();
    const cart: CartItemType[] = storageCart ?? [];

    const itemIndex = cart.length > 0 && findCartItem(storageCart, product._id);

    if (itemIndex >= 0) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    setCart(cart);
};

export const updateCartQtyStorage = (id: string, qty: number): void => {
    const cart = getCart();
    const itemIndex = findCartItem(cart, id);

    cart[itemIndex].quantity = qty;

    setCart(cart);
};
