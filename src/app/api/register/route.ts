import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, password } = await req.json();

    if (!name || !password) {
      return NextResponse.json(
        { msg: "Name and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { name } });

    if (existingUser) {
      return NextResponse.json(
        { msg: "Username already exists" },
        { status: 403 }
      );
    }

    // Hash the password before saving it

    const user = await prisma.user.create({
      data: { name, password },
    });

    // Create a JWT token
    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    return NextResponse.json(
      { msg: "User created successfully", user, token },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
