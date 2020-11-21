import Head from 'next/head';
import { Header } from '../Header';
import { Nav } from '../Nav';
import styles from './Layout.module.css';

type Props = {
    title?: string;
    noHeader?: boolean;
};

export const Layout: React.FC<Props> = ({
    children,
    title = 'Best pizza in town',
    noHeader,
}) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!noHeader && <Header />}
            <div className={styles.content}>{children}</div>
            <Nav />
        </div>
    );
};
