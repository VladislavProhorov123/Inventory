import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware";


const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/dashboard', authMiddleware, isAdmin, authController.dashboard)

export default router