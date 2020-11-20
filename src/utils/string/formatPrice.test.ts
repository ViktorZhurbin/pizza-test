import { CURRENCY } from '@/constants/currency';
import { formatPrice } from './formatPrice';

test('formats 0 to EUR', () => {
    expect(formatPrice(0, CURRENCY.EUR)).toBe('0,00\xa0€');
});

test('formats 10.99 to USD', () => {
    expect(formatPrice(0, CURRENCY.USD)).toBe('$0.00');
});

test('formats 13.99 to EUR', () => {
    expect(formatPrice({ EUR: 13.99, USD: 14.99 }, CURRENCY.EUR)).toBe(
        '13,99\xa0€'
    );
});

test('formats 1000000.09 to USD', () => {
    expect(formatPrice({ EUR: 10000.99, USD: 9000.89 }, CURRENCY.USD)).toBe(
        '$9,000.89'
    );
});
