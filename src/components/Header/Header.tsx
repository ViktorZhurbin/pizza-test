import { signIn, signOut, useSession } from 'next-auth/client';
import { LocaleContext } from '@/contexts/Locale';
import { useContext } from 'react';
import styles from './Header.module.css';
import { LOCALE } from '@/constants';

export const Header: React.FC = () => {
    const { locale, setLocale } = useContext(LocaleContext);
    const [session, loading] = useSession();
    const AuthButton = !session ? (
        <button onClick={() => signIn()}>Sign in</button>
    ) : (
        <button onClick={() => signOut()}>Sign out</button>
    );

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
