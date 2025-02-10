import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, password } = await req.json();

    if (!name || !password) {
      return NextResponse.json(
        { msg: "Username and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { name },
    });

    if (!existingUser) {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }

    if (password !== existingUser.password) {
      return NextResponse.json({ msg: "Incorrect password" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: existingUser.id },
      process.env.SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    return NextResponse.json(
      { msg: "Login successful", token },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
