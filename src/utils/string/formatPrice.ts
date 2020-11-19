import { CURRENCY } from '@/constants/currency';

export const formatPrice = (
    number: number | string,
    currency: string
): string => {
    const locale = currency === CURRENCY.EUR ? 'de-DE' : 'en-US';

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(Number(number));
};

export const convertPrice = (price: number, currency: string): number =>
    currency === CURRENCY.EUR ? price : price * 1.1;
