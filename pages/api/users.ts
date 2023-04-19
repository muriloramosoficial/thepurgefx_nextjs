import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, MongoClientOptions } from 'mongodb';

interface MyMongoClientOptions extends MongoClientOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const uri = process.env.MONGODB_URI!;

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

if (!clientPromise) {
  const options: MyMongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
//  res.status(200).json(documents);

    try {
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
