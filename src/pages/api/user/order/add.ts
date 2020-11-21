import { NextApiResponse } from 'next';

import { UserApiRequest, withUser } from '@/db/middleware';

const handler = async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { cart },
            user,
        } = req;

        if (!cart) {
            throw new Error('Missing required field: cart');
        }

        user.orders.push({ date: new Date(), items: cart });
        user.cart = [];

        const updatedUser = await user.save();

        if (!updatedUser) {
            throw new Error(`Couldn't create order`);
        }

        res.status(200).json({ data: updatedUser.orders });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default withUser(handler);
