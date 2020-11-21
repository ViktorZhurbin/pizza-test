import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { CurrencyProvider } from '@/contexts/Currency';
import { UserProvider } from '@/contexts/User';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider session={pageProps.session}>
            <UserProvider>
                <CurrencyProvider>
                    <Component {...pageProps} />
                </CurrencyProvider>
            </UserProvider>
        </Provider>
    );
};

export default MyApp;
