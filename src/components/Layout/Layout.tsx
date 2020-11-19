import Head from 'next/head';
import { Header } from '../Header';
import styles from './Layout.module.css';

type Props = {
    title?: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                {Boolean(title) && <title>{title}</title>}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
