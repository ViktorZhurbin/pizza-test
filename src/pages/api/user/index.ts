import { NextApiResponse } from 'next';

import { UserApiRequest, withUser } from '@/db/middleware';

const handler = async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const { user } = req;

        res.status(200).json({
            data: user,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default withUser(handler);
