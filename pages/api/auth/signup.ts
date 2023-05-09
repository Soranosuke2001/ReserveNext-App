import { NextApiRequest, NextApiResponse } from "next";

import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;

    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First Name is too short or too long",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last Name is too short or too long",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is Invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone Number is Invalid",
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        errorMessage: "City is Invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is not strong enough",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).send({ errorMessage: errors[0] });
    }

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists)
      return res.status(400).send({ message: "Email is already registered" });

    // Hashing the password and adding 10 random characters to the right
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        city,
        password: hashedPassword,
      },
    });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    res.status(200).send({ message: user, token });
    // res.status(200).send({ message: "Complete" });
  }
}
