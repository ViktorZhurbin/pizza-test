import { createContext } from 'react';
import { useSession } from 'next-auth/client';
import { UserType } from '@/modules/user/typings';
import useSWR from 'swr';

export type State = {
    user: UserType;
    isLoading: boolean;
    error: boolean | undefined;
    mutate(): void;
};

export const UserContext = createContext<State | undefined>(undefined);

export const UserProvider: React.FC = ({ children }) => {
    const [session] = useSession();
    const { data: user, error, mutate } = useSWR(session ? '/api/user' : null);

    return (
        <UserContext.Provider
            value={{
                user,
                error,
                isLoading: !user && !error,
                mutate,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
