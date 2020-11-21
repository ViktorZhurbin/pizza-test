import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import { CURRENCY_BY_LOCALE, LOCALE, LOCALE_KEY } from '@/constants';

type State = {
    locale: string;
    currency: string;
    setLocale: Dispatch<SetStateAction<string>>;
};

export const LocaleContext = createContext<State | undefined>(undefined);

export const LocaleProvider: React.FC = ({ children }) => {
    const [locale, setLocale] = useState(LOCALE.de_DE);
    const [currency, setCurrency] = useState(CURRENCY_BY_LOCALE[locale]);

    useEffect(() => {
        const locale =
            window?.localStorage?.getItem(LOCALE_KEY) || LOCALE.de_DE;
        setLocale(locale);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCALE_KEY, locale);
    }, [locale]);

    useEffect(() => {
        setCurrency(CURRENCY_BY_LOCALE[locale]);
    }, [locale]);

    return (
        <LocaleContext.Provider value={{ locale, currency, setLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
