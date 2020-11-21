import { CURRENCY_BY_LOCALE } from '@/constants';
import { ProductType } from '@/modules/product/typings';

export const formatPrice = (
    price: number | ProductType['price'],
    locale: string
): string => {
    const currency = CURRENCY_BY_LOCALE[locale];
    const numPrice = typeof price === 'number' ? price : price[currency];

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(numPrice);
};
