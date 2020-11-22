import { signIn, signOut, useSession } from 'next-auth/client';
import { LocaleContext } from '@/contexts/Locale';
import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { LOCALE } from '@/constants';

export const Header: React.FC = () => {
    const { locale, setLocale } = useContext(LocaleContext);
    const [session, loading] = useSession();
    const [isAuth, setAuth] = useState(Boolean(session));

    const handleSignOut = () => {
        signOut();
        setAuth(false);
    };

    const AuthButton = !isAuth ? (
        <button onClick={() => signIn()}>Sign in</button>
    ) : (
        <button onClick={handleSignOut}>Sign out</button>
    );

    useEffect(() => {
        setAuth(Boolean(session));
    }, [session]);

    return (
        <header className={styles.header}>
            <div className={styles.auth}>{!loading && AuthButton}</div>
            <select value={locale} onChange={(e) => setLocale(e.target.value)}>
                <option value={LOCALE.de_DE}>EUR</option>
                <option value={LOCALE.en_US}>USD</option>
            </select>
        </header>
    );
};
