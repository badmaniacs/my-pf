import { NextApiRequest, NextApiResponse } from 'next';
import database from '@/libs/firebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body, query } = req;

  switch (method) {
    case 'POST':
      try {
        const result = await database.addComent(body);
        res.status(201).json(result);
      } catch (error) {
        console.log(error);
      }
      break;

    case 'GET':
      if (Object.keys(query).length === 0) {
        try {
          const result = await database.getFirstPage();
          return res.status(200).json(result);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const { key } = query;
          const result = await database.getMorePage(key as string);
          return res.status(200).json(result);
        } catch (error) {
          console.log(error);
        }
      }
      break;

    case 'DELETE':
      try {
        const { key } = query;
        console.log(key)
        const result = await database.deleteComment(key as string);
        return res.status(202).json(result);
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      return res.status(400).json({ error: 'Invalid method' });
      break;
  }
  return null;
};
export default handler;
