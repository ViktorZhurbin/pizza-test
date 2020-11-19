import faker from 'faker';

import { ProductType } from '@/modules/home/typings';

export const generateNFakeProducts = (n: number): ProductType[] => {
    return [...Array(n).keys()].map(() => {
        const priceEUR = faker.random.number({ min: 9, max: 100 });

        return {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: {
                EUR: priceEUR,
                USD: priceEUR * 0.9,
            },
            image: `/images/pizza.jpg`,
        };
    });
};
