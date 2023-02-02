// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface ShowsSearchResultDto {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ShowsSearchResultDto>) {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${req.query.search}`);
  const json = await response.json();

  res.status(200).json(json);
}
