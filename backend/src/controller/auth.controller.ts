import { prisma } from "../lib/prisma";
import { authService } from "../services/auth.service";
import { Request, Response } from "express";

export const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const result = await authService.register(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const result = await authService.login(req.body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  dashboard: async (req: Request, res: Response) => {
    try {
      const userId = (req as any).userId;
      const user = await prisma.user.findUnique({
        where: { id: userId},
        select: {
          id: true,
          name: true,
          email: true,
        }
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json({ message: "Error fetching dashboard data" });
    }
  },
};
