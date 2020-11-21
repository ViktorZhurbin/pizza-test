import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

import { UserDocumentType, UserModel } from '../models';
import { dbConnect } from '../utils';

type Handler = (req: UserApiRequest, res: NextApiResponse) => Promise<any>;
export type UserApiRequest = NextApiRequest & { user: UserDocumentType };

export const withUser = (handler: Handler) => async (
    req: UserApiRequest,
    res: NextApiResponse
): Promise<any> => {
    try {
        const session = await getSession({ req });

        if (!session) {
            return;
        }

        await dbConnect();

        const user = await UserModel.findOne({ _id: session.userId });
        if (!user) {
            return res.status(500).send('No user found');
        }
        req.user = user;

        return handler(req, res);
    } catch (error) {
        console.error(error);
    }
};
