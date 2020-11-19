import '../styles/globals.css';
import { AppProps } from 'next/app';
import { CurrencyProvider } from '@/contexts/Currency';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <CurrencyProvider>
            <Component {...pageProps} />
        </CurrencyProvider>
    );
};

export default MyApp;
