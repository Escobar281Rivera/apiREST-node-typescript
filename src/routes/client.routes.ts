import ClientController from "../controllers/clients.controller";
import { Router } from "express";


const router = Router()
const client = ClientController;

router.get('/',client.listClient)


export default router