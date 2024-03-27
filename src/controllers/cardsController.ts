import { NextApiRequest, NextApiResponse } from 'next';
import { getAllCards } from '../repositories/cardsRepository';

export default function getAllCardsHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const cards = getAllCards();
    res.status(200).json(cards);
  } else {
    res.status(405).end();
  }
}
