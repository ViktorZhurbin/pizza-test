import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import { Dispatch, useContext, useEffect, useState } from 'react';
import { CartType, UserType } from '@/modules/user/typings';
import { getCartStorage } from '@/modules/user/utils';
import { LocaleContext } from '@/contexts/Locale';
import { DELIVERY_COST } from '@/modules/user/constants';

type User = Omit<UserType, 'cart'> & {
    cart: {
        items: CartType;
        total: number;
        quantity: number;
        deliveryCost: number;
        setCart: Dispatch<CartType>;
    };
    mutate(): void;
};

export const useUser = (): User => {
    const [session, loading] = useSession();
    const { data: user, mutate } = useSWR<UserType>(
        !session ? null : '/api/user'
    );
    const { currency } = useContext(LocaleContext);

    const [cart, setCart] = useState<CartType>();
    const [quantity, setQuantity] = useState<number>();
    const [total, setTotal] = useState<number>();
    const [deliveryCost, setDeliveryCost] = useState(DELIVERY_COST[currency]);

    useEffect(() => {
        setDeliveryCost(DELIVERY_COST[currency]);
    }, [currency]);

    useEffect(() => {
        if (!loading && !session) {
            const cartStorage = getCartStorage();
            cartStorage && setCart(cartStorage);
        } else {
            user && setCart(user.cart);
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

    return {
        ...user,
        cart: {
            items: cart,
            total,
            quantity,
            deliveryCost,
            setCart,
        },
        mutate,
    };
};
