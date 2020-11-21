import { LOCALE, LOCALE_KEY } from '@/constants';

export const getLocale = (): string =>
    localStorage.getItem(LOCALE_KEY) || LOCALE.de_DE;

export const setLocale = (value: string): void =>
    localStorage.setItem(LOCALE_KEY, value);
