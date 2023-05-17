import { Router } from "express";
import DetailInvestmentController from "../controllers/detailInvestment.controller";

const detailInvestment = DetailInvestmentController
const router = Router()

router.post('/', detailInvestment.createDetailInvestment)




export default router
