import { Router } from "express";
import { authController } from "../controller/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/dashboard', authMiddleware, authController.dashboard)

export default router