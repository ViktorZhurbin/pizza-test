import { NextApiRequest, NextApiResponse } from 'next';

import { ProductModel } from '@/db/models';
import { dbConnect } from '@/db/utils';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { products },
        } = req;

        if (!products) {
            throw new Error('Missing required fields: products');
        }

        await dbConnect();

        const product = await ProductModel.create(products);

        res.status(201).json({ success: true, data: product });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
