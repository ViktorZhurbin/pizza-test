import { CurrencyContext } from '@/contexts/Currency';
import { useContext } from 'react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    const { currency, setCurrency } = useContext(CurrencyContext);

    return (
        <header className={styles.header}>
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
