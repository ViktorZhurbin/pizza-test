import { LOCALE } from './locale';

export const CURRENCY = {
    USD: 'USD',
    EUR: 'EUR',
};

export const CURRENCY_BY_LOCALE = {
    [LOCALE.en_US]: CURRENCY.USD,
    [LOCALE.de_DE]: CURRENCY.EUR,
};
