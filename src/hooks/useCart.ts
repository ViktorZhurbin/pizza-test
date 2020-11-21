import { useSession } from 'next-auth/client';
import { Dispatch, useContext, useEffect, useState } from 'react';
import { UserContext } from '@/contexts/User';
import { CartType } from '@/modules/user/typings';
import { getCartStorage } from '@/modules/user/utils';

export const useCart = (): {
    cart: CartType;
    setCart: Dispatch<CartType>;
    isLoading: boolean;
} => {
    const [cart, setCart] = useState<CartType>();
    const [session, loading] = useSession();
    const user = useContext(UserContext);

    useEffect(() => {
        if (!loading && !session) {
            const storageCart = getCartStorage();
            storageCart && setCart(storageCart);
        } else {
            setCart(user.cart);
        }
    }, [session, loading, user]);

    return { cart, setCart, isLoading: !cart };
};
