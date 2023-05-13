import { NextApiRequest, NextApiResponse } from "next";

import { times } from "../../../../data";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type QueryProps = {
  slug: string;
  day: string;
  time: string;
  partySize: string;
};

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { slug, day, time, partySize } = req.query as QueryProps;

  if (!day || !time || !partySize) {
    return res.status(400).send({ message: "Invalid Data Provided" });
  }

  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  console.log();

  if (!searchTimes) {
    return res.status(400).send({
      message: "Invalid Data Provided searchTimes",
    });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  return res.status(200).send({ searchTimes, bookings });
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-02-03&time=14:00:00.000Z&partySize=4
