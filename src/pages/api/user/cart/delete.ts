import { NextApiResponse } from 'next';

import { UserApiRequest, withUser } from '@/db/middleware';

const handler = async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { productId },
            user,
        } = req;

        if (!productId) {
            throw new Error('Missing required field: productId');
        }

        user.cart = user.cart.filter(
            (item) => item.product._id.toString() !== productId
        );

        const updatedUser = await user.save();

        if (!updatedUser) {
            throw new Error(`Couldn't delete productId: ${productId}`);
        }

        res.status(200).json({ data: updatedUser.cart });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default withUser(handler);
