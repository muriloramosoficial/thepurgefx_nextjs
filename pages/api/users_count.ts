import conn from '@/services/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
//  res.status(200).json(documents);

    try {
        const { clientPromise } = await conn();
        const client = await clientPromise;
        const collection = client!.db().collection('users');
        // const documents = await collection.find({}).toArray();
        const documents = await collection.countDocuments();
        return res.status(200).json({documents});
    } catch (error) {
        console.error(error);
        return res.status(404).json({ message: 'Nenhum documento foi encontrado' });
    }
}