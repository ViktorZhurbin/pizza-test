import { useSession } from 'next-auth/client';

import { Layout } from '@/components/Layout';

import { User } from '../../components/User';
import { useContext } from 'react';
import { UserContext } from '@/contexts/User';

export const Profile: React.FC = () => {
    const [session] = useSession();
    const user = useContext(UserContext);

    return (
        <Layout>
            {session && user ? <User user={user} /> : <h2>Please sign in</h2>}
        </Layout>
    );
};
