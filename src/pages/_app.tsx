import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { LocaleProvider } from '@/contexts/Locale';
import { UserProvider } from '@/contexts/User';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider session={pageProps.session}>
            <UserProvider>
                <LocaleProvider>
                    <Component {...pageProps} />
                </LocaleProvider>
            </UserProvider>
        </Provider>
    );
};

export default MyApp;
