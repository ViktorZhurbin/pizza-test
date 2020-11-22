import { useState } from 'react';

import styles from './User.module.css';
import Link from 'next/link';
import { Orders } from '../Orders';
import { useUser } from '@/hooks/useUser';

export const User: React.FC = () => {
    const [imageError, setImageError] = useState(false);
    const user = useUser();

    return (
        user && (
            <div className={styles.container}>
                <section className={styles.header}>
                    {user.image && !imageError ? (
                        <img
                            className={styles.photo}
                            src={user.image}
                            alt="User Photo"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className={styles.fallbackPhoto}>
                            {user.name && user.name[0]}
                        </div>
                    )}
                    <span className={styles.name}>
                        {user.name || user.email}
                    </span>
                </section>
                {user.role === 'admin' && (
                    <Link href="/admin">
                        <a>Admin Panel</a>
                    </Link>
                )}
                <section className={styles.orders}>
                    <Orders orders={user.orders} />
                </section>
            </div>
        )
    );
};
