import { NextApiRequest, NextApiResponse } from "next";

import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

import { PrismaClient } from "@prisma/client";
import { setCookie } from "cookies-next";
const prisma = new PrismaClient();

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const errors: string[] = [];
    const { email: enteredEmail, password } = req.body;

    const validationSchema = [
      { valid: validator.isEmail(enteredEmail), errorMessage: "Invalid Email" },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: "Invalid Password",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) return res.status(400).send({ message: errors[0] });

    const user = await prisma.user.findUnique({
      where: {
        email: enteredEmail,
      },
    });

    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

    return res.status(200).send({
      message: "Successfully Signed In",
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });
  }

  return res.status(404).send({ message: "Undefined Endpoint" });
}
