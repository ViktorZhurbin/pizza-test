import faker from 'faker';

import { ProductType } from '@/modules/product/typings';

export const generateNFakeProducts = (n: number): ProductType[] => {
    return [...Array(n).keys()].map(() => {
        const EUR = faker.random.number({ min: 9, max: 100 });
        const USD = Number.parseFloat((EUR * 0.9).toFixed(2));

        return {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: {
                EUR,
                USD,
            },
            image: `/images/pizza.jpg`,
        };
    });
};
