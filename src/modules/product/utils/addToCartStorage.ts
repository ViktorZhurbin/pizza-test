import { CART_KEY } from '@/modules/cart/constants';
import { CartItemType } from '@/modules/cart/typings';
import { ProductType } from '../typings';

export const addToCartStorage = (product: ProductType): void => {
    let cart: CartItemType[] = [];
    let itemIndex = null;
    if (localStorage.getItem(CART_KEY)) {
        cart = JSON.parse(localStorage.getItem(CART_KEY));
        itemIndex = cart.findIndex((item) => item.product._id === product._id);
    }
    if (itemIndex && itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
