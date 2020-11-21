import { LOCALE } from '@/constants';
import { formatPrice } from './formatPrice';

test('formats 0 to EUR', () => {
    expect(formatPrice(0, LOCALE.de_DE)).toBe('0,00\xa0€');
});

test('formats 10.99 to USD', () => {
    expect(formatPrice(0, LOCALE.en_US)).toBe('$0.00');
});

test('formats 13.99 to EUR', () => {
    expect(formatPrice({ EUR: 13.99, USD: 14.99 }, LOCALE.de_DE)).toBe(
        '13,99\xa0€'
    );
});

test('formats 1000000.09 to USD', () => {
    expect(formatPrice({ EUR: 10000.99, USD: 9000.89 }, LOCALE.en_US)).toBe(
        '$9,000.89'
    );
});
