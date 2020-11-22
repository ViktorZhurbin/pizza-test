import { NextApiResponse } from 'next';

import { UserApiRequest, withUser } from '@/db/middleware';

const handler = async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { productId, quantity },
            user,
        } = req;

        if (!productId) {
            throw new Error('Missing required field: productId');
        }
        if (!quantity) {
            throw new Error('Missing required field: quantity');
        }

        const itemIndex = user.cart.findIndex(
            (item) => item.product._id.toString() === productId
        );
        user.cart[itemIndex].quantity = quantity;
        const updatedUser = await user.save();

        if (!updatedUser) {
            throw new Error(
                `Couldn't update quantity for productId: ${productId} in cart`
            );
        }

        res.status(200).json({ data: updatedUser.cart });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default withUser(handler);
