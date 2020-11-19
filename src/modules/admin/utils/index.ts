import faker from 'faker';

import { ProductType } from '@/modules/home/typings';

export const generateNFakeProducts = (n: number): ProductType[] => {
    return [...Array(n).keys()].map(() => ({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.random.number({ min: 9, max: 100 }),
        image: `/images/pizza.jpg`,
    }));
};
