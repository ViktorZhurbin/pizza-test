import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { CURRENCY } from '@/constants/currency';

type State = {
    currency: string;
    setCurrency: Dispatch<SetStateAction<string>>;
};

export const CurrencyContext = createContext<State | undefined>(undefined);

export const CurrencyProvider: React.FC = ({ children }) => {
    const [currency, setCurrency] = useState(CURRENCY.EUR);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};
