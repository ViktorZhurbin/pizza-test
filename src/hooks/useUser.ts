import { useContext } from 'react';
import { UserContext, UserContextType } from '@/contexts/User';

export const useUser = (): UserContextType => {
    const user = useContext(UserContext);

    return user;
};
