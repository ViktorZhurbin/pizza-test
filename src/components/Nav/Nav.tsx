import IconCart from './icons/cart.svg';
import IconHome from './icons/home.svg';
import IconProfile from './icons/profile.svg';
import styles from './Nav.module.css';
import { NavLink } from './NavLink';
import { useCart } from '@/hooks/useCart';

export const Nav: React.FC = ({ children }) => {
    const { cart } = useCart();

    return (
        <nav className={styles.container}>
            <div className={styles.sticky}>{children}</div>
            <div className={styles.linkWrapper}>
                <NavLink title="Home" icon={<IconHome />} href="/" />
                <NavLink
                    title="Cart"
                    icon={<IconCart />}
                    href="/cart"
                    counter={cart?.length}
                />
                <NavLink
                    title="Profile"
                    icon={<IconProfile />}
                    href="/profile"
                />
            </div>
        </nav>
    );
};
