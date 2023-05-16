import AuthController from "../controllers/auth.controller";
import { Router } from "express";


const router = Router()
const auth = AuthController

router.post('/login', auth.login)

export default router