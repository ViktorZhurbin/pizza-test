import Link from 'next/link';
import styles from './EmptyCart.module.css';

export const EmptyCart: React.FC = () => (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>Cart is empty</h1>
        <Link href="/">
            <a className={styles.subtitle}>Buy more pizza!</a>
        </Link>
    </div>
);
