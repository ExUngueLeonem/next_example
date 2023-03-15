// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { socials } from './data/socials'

type Data = {
  id: number;
  icon: string;
  path: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === 'GET') {
    console.log(req.method)
    res.status(200).json(socials)
  }
}
