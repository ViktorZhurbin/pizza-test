import { CURRENCY } from '@/constants/currency';
type CurrencyKeys = keyof typeof CURRENCY;

export type ProductType = {
    _id?: string;
    title: string;
    description: string;
    price: {
        [key in CurrencyKeys]: number;
    };
    image?: string;
};
