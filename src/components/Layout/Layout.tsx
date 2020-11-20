import Head from 'next/head';
import { Header } from '../Header';
import styles from './Layout.module.css';

type Props = {
    title?: string;
    noHeader?: boolean;
};

export const Layout: React.FC<Props> = ({ children, title, noHeader }) => {
    return (
        <div className={styles.wrapper}>
            <Head>
                {Boolean(title) && <title>{title}</title>}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!noHeader && <Header />}
            <div className={styles.content}>{children}</div>
        </div>
    );
};
