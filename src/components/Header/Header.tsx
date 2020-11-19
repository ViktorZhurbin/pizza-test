import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <select>
                <option>EUR</option>
                <option>USD</option>
            </select>
        </header>
    );
};
