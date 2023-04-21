import { NextApiRequest, NextApiResponse } from 'next';
import conn from '@/services/mongodb';

type User = {
  username: string;
  email: string;
  password: string;
};

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
        const collection = client!.db().collection<User>('users');

        // O corpo da requisição contém os dados do usuário
        const { username, email, password, actived, balance, createdAt } = req.body;

        // Cria um novo usuário com os dados informados
        const newUser = {
          username,
          email,
          password,
          actived,
          balance,
          createdAt
        };

        // Insere o novo usuário no banco de dados
        const result = await collection.insertOne(newUser);
        const insertedUserId = result.insertedId;
        const insertedUser = { ...newUser, _id: insertedUserId };

        // Retorna o novo usuário criado
        res.status(201).json(insertedUser);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar usuário' });
      }
    }

  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
