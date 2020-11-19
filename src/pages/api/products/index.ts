import { NextApiRequest, NextApiResponse } from 'next';

import { ProductModel } from '@/db/models';
import { dbConnect } from '@/db/utils';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const { body } = req;

        await dbConnect();

        const filter = typeof body === 'object' ? body : {};
        const products = await ProductModel.find(filter);

        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
