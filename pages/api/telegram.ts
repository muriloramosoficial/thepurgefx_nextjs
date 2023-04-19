import type { NextApiRequest, NextApiResponse } from 'next'
import TelegramBot from 'node-telegram-bot-api';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const { chatId } = req.query;

    // Substitua abaixo pelo seu token da API do Telegram
    const bot = new TelegramBot('5492953302:AAF9kQW46kNQoF5pne5dOmb5h8-nYT3o5Y0', { polling: false });

    try {
        const membersCount = await bot.getChatMemberCount(640732019);
        res.status(200).json({ membersCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao obter número de inscritos no canal.' });
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json(
//     {
//       name: 'John Doe'
//     }
//   )
// }
