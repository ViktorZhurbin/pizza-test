export const formatDate = (date: Date, locale: string): string => {
    return new Intl.DateTimeFormat(locale).format(new Date(date));
};
