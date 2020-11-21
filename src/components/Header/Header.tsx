import { signIn, signOut, useSession } from 'next-auth/client';
import { CurrencyContext } from '@/contexts/Currency';
import { useContext } from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const { currency, setCurrency } = useContext(CurrencyContext);
    const [session, loading] = useSession();

    return (
        <header className={styles.header}>
            {!loading && (
                <div className={styles.auth}>
                    {!session ? (
                        <button onClick={signIn}>Sign in</button>
                    ) : (
                        <button onClick={signOut}>Sign out</button>
                    )}
                </div>
            )}
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
        </header>
    );
};
