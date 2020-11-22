import { useSession } from 'next-auth/client';
import { Dispatch, useContext, useEffect, useState } from 'react';
import { UserContext } from '@/contexts/User';
import { CartType } from '@/modules/user/typings';
import { getCartStorage } from '@/modules/user/utils';
import { LocaleContext } from '@/contexts/Locale';
import { DELIVERY_COST } from '@/modules/user/constants';

export const useCart = (): {
    cart: CartType;
    total: number;
    quantity: number;
    deliveryCost: number;
    setCart: Dispatch<CartType>;
    isLoading: boolean;
} => {
    const [cart, setCart] = useState<CartType>();
    const [quantity, setQuantity] = useState<number>();
    const [total, setTotal] = useState<number>();
    const { currency } = useContext(LocaleContext);
    const [deliveryCost, setDeliveryCost] = useState(DELIVERY_COST[currency]);

    const [session, loading] = useSession();
    const user = useContext(UserContext);

    useEffect(() => {
        setDeliveryCost(DELIVERY_COST[currency]);
    }, [currency]);

    useEffect(() => {
        if (!loading && !session) {
            const storageCart = getCartStorage();
            storageCart && setCart(storageCart);
        } else {
            setCart(user.cart);
        }
    }, [session, loading, user]);

    useEffect(() => {
        if (cart) {
            const { total, quantity } = cart.reduce(
                (acc, item) => {
                    const total =
                        acc.total +
                        item.quantity * item.product.price[currency];
                    const quantity = acc.quantity + item.quantity;

                    return { total, quantity };
                },
                { total: 0, quantity: 0 }
            );

            setTotal(total);
            setQuantity(quantity);
        }
    }, [cart, currency]);

    return { cart, total, quantity, deliveryCost, setCart, isLoading: !cart };
};
