import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      name,
      password,
      customer_name,
      customer_surname,
      birthday,
      gender,
      phone_number,
      zipcode,
      address,
      consent_data,
      consent_improve,
    } = await req.json();

    // Error response
    if (!name || !password) {
      return NextResponse.json(
        { msg: "Name and password are required" },
        { status: 400 }
      );
    } else if (!customer_name) {
      return NextResponse.json(
        { msg: "Your name is required" },
        { status: 400 }
      );
    } else if (!customer_surname) {
      return NextResponse.json(
        { msg: "Your surname is required" },
        { status: 400 }
      );
    } else if (!birthday) {
      return NextResponse.json(
        { msg: "Birth date is required" },
        { status: 400 }
      );
    } else if (!gender) {
      return NextResponse.json({ msg: "Gender is required" }, { status: 400 });
    } else if (!phone_number) {
      return NextResponse.json(
        { msg: "Phone number is required" },
        { status: 400 }
      );
    } else if (!zipcode) {
      return NextResponse.json(
        { msg: "Zip code is required" },
        { status: 400 }
      );
    } else if (!address) {
      return NextResponse.json({ msg: "Address is required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { name },
    });

    if (existingUser) {
      return NextResponse.json(
        { msg: "Username already exists" },
        { status: 403 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        password,
        customer_name,
        customer_surname,
        birthday: new Date(birthday),
        gender,
        phone_number,
        zipcode,
        address,
        consent_data,
        consent_improve,
      },
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
