import { createContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import { fetchUser } from '@/modules/user/services';
import { UserType } from '@/modules/user/typings';

export const UserContext = createContext<UserType | undefined>(undefined);

export const UserProvider: React.FC = ({ children }) => {
    const [session] = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (session) {
            fetchUser().then(({ data }) => {
                // localStorage.removeItem(CART_KEY);
                setUser(data);
            });
        }
    }, [session]);

    return (
        <UserContext.Provider value={{ ...user }}>
            {children}
        </UserContext.Provider>
    );
};
