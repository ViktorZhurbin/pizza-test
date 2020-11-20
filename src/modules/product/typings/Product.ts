import { CURRENCY } from '@/constants/currency';

export type CurrencyKeys = keyof typeof CURRENCY;
export type PriceType = {
    [key in CurrencyKeys]: number;
};

export type ProductType = {
    _id?: string;
    title: string;
    description: string;
    price: PriceType;
    image?: string;
};
