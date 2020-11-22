import {
    createContext,
    Dispatch,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useSession } from 'next-auth/client';
import { CartType, UserType } from '@/modules/user/typings';
import useSWR from 'swr';
import { getCartStorage } from '@/modules/user/utils';
import { CART_KEY, DELIVERY_COST } from '@/modules/user/constants';
import { LocaleContext } from './Locale';

export type UserContextType = Omit<UserType, 'cart'> & {
    cart: {
        items: CartType;
        total: number;
        quantity: number;
        deliveryCost: number;
        setCart: Dispatch<CartType>;
    };
    mutate(): void;
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export const UserProvider: React.FC = ({ children }) => {
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
            localStorage.removeItem(CART_KEY);
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

    const value = {
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

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
