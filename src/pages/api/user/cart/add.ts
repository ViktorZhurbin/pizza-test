import { NextApiResponse } from 'next';

import { UserApiRequest, withUser } from '@/db/middleware';

const handler = async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const {
            body: { product },
            user,
        } = req;

        if (!product) {
            throw new Error('Missing required field: product');
        }

        const itemIndex = user.cart.findIndex(
            (item) => item.product._id.toString() === product._id.toString()
        );

        if (itemIndex !== -1) {
            user.cart[itemIndex].quantity += 1;
        } else {
            user.cart.push({ product, quantity: 1 });
        }

        const updatedUser = await user.save();

        if (!updatedUser) {
            throw new Error(`Couldn't add product to cart: ${product}`);
        }

        res.status(200).json({ data: updatedUser.cart });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default withUser(handler);
