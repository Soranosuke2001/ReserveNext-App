import { NextApiRequest, NextApiResponse } from "next";

type QueryProps = {
  slug: string;
  day: string;
  time: string;
  partySize: string;
};

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { slug, day, time, partySize } = req.query as QueryProps;

  if (!day || !time || !partySize) {
    return res.status(400).send({ message: "Invalid Data Provided" });
  }

  return res.status(200).send({ slug, day, time, partySize });
}
