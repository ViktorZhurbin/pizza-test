import { signIn, signOut, useSession } from 'next-auth/client';
import { LocaleContext } from '@/contexts/Locale';
import { useContext } from 'react';
import styles from './Header.module.css';
import { LOCALE } from '@/constants';

export const Header: React.FC = () => {
    const { locale, setLocale } = useContext(LocaleContext);
    const [session, loading] = useSession();

    return (
        <header className={styles.header}>
            {!loading && (
                <div className={styles.auth}>
                    {!session ? (
                        <button onClick={() => signIn()}>Sign in</button>
                    ) : (
                        <button onClick={() => signOut()}>Sign out</button>
                    )}
                </div>
            )}
            <select value={locale} onChange={(e) => setLocale(e.target.value)}>
                <option value={LOCALE.de_DE}>EUR</option>
                <option value={LOCALE.en_US}>USD</option>
            </select>
        </header>
    );
};
