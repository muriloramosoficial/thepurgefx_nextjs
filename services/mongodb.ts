// project id: 643ff656d70f130fd8fbf1b4
// user: thepurgefx
// pass: 0zN8AQXQKW9GkCUj

import { MongoClient, MongoClientOptions } from 'mongodb';

// export default function conn() {
//     interface MyMongoClientOptions extends MongoClientOptions {
//         useNewUrlParser: boolean;
//         useUnifiedTopology: boolean;
//       }
      
//       const uri = process.env.MONGODB_URI!;
      
//       let client: MongoClient | undefined;
//       let clientPromise: Promise<MongoClient> | undefined;
      
//       if (!clientPromise) {
//         const options: MyMongoClientOptions = {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         };
//         client = new MongoClient(uri, options);
//         clientPromise = client.connect();
//       }
// }


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

export default async function conn() {
  return {
    client,
    clientPromise,
  };
}
