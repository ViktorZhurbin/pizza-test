import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { CurrencyProvider } from '@/contexts/Currency';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider session={pageProps.session}>
            <CurrencyProvider>
                <Component {...pageProps} />
            </CurrencyProvider>
        </Provider>
    );
};

export default MyApp;
