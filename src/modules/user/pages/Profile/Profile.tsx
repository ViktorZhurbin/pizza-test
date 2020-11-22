import { useSession } from 'next-auth/client';

import { Layout } from '@/components/Layout';

import { User } from '../../components/User';

export const Profile: React.FC = () => {
    const [session] = useSession();

    return <Layout>{session ? <User /> : <h2>Please sign in</h2>}</Layout>;
};
