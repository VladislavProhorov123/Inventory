import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IAuth } from "../validators/auth.validate";

export const authService = {
  register: async (data: IAuth) => {
    const { name, email, password, adminSecret} = data;

    if (!name || !email || !password) {
      throw new Error("Name, email and password are required");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const role = adminSecret === process.env.ADMIN_SECRET ? "ADMIN" : "USER"

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role
        },
      });

      const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
      });
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
      };
    } catch (error) {
      throw new Error("Error creating user");
    }
  },
    login: async (data: IAuth) => {
    const { email, password } = data

    if(!email || !password) {
      throw new Error("Email and password are required")
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if(!user) {
      throw new Error("Invalid credentials")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
      throw new Error("Invalid credentials")
    }

    const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET!, {
      expiresIn: "7d"
    })
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
};
