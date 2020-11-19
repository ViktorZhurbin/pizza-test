import { NextApiRequest, NextApiResponse } from 'next';

import { ProductModel } from '@/db/models';
import { dbConnect } from '@/db/utils';

export default async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { filter },
        } = req;

        await dbConnect();

        const { deletedCount } = await ProductModel.deleteMany(filter);

        res.status(200).json({
            success: true,
            data: `Deleted ${deletedCount} products`,
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
