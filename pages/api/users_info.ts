import conn from '@/services/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    if (req.method === 'POST') {
        const { securityKey } = req.body;
    
        if (securityKey !== '123') {
            return res.status(401).json({ message: 'Senha de segurança inválida' });
        } else {
            try {
                const { clientPromise } = await conn();
                const client = await clientPromise;
                const collection = client!.db().collection('users');
                const users = await collection.find().sort({ _id: -1 }).limit(5).toArray();
                res.json(users);
            } catch (error) {
                console.error(error);
                return res.status(404).json({ message: 'Nenhum documento foi encontrado' });
            }
        }

    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}