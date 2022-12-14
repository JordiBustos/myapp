import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );

    res.setHeader(
      "Set-cookie",
      cookie.serialize("auth", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV !== "development",
      })
    );
    res.json(user);
  } else {
    res.status(401);
    res.json({ error: "Invalid email or password" });
  }
};
