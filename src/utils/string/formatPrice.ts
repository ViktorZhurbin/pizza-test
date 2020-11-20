import { CURRENCY } from '@/constants/currency';
import { ProductType } from '@/modules/product/typings';

export const formatPrice = (
    price: number | ProductType['price'],
    currency: string
): string => {
    const locale = currency === CURRENCY.EUR ? 'de-DE' : 'en-US';
    const numPrice = typeof price === 'number' ? price : price[currency];

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(numPrice);
};
