import conn from '@/services/mongodb';
import { NextApiRequest, NextApiResponse } from "next";

interface User {
    _id: string;
    username: string;
    email: string;
    actived?: boolean;
    balance?: number;
    createdAt: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {
    const { clientPromise } = await conn();
    const client = await clientPromise;
    const collection = client!.db().collection<User>("users");

    const users = await collection
        .find()
        .sort({ _id: -1 })
        .limit(5)
        .toArray();

    const latestUsers = users.map(({ _id, username, email, createdAt }) => ({
        _id,
        username,
        email,
        createdAt,
    }));

    res.status(200).json(latestUsers);
}
