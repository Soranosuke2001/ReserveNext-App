import { NextApiRequest, NextApiResponse } from "next";

import * as jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const fullToken = req.headers["authorization"] as string;
  const token = fullToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email)
    return res.status(401).send({ message: "Unauthorized Access" });

  const userExists = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  if (!userExists)
    return res.status(401).send({ message: "Unauthorized Access" });

  const user = {
    firstName: userExists.first_name,
    lastName: userExists.last_name,
    email: userExists.email,
    phone: userExists.phone,
    city: userExists.phone,
    id: userExists.id,
  };

  return res.status(200).send({ message: "Complete", user });
}
