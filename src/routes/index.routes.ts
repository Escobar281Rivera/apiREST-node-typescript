import dotenv from 'dotenv'
import { Router } from 'express'
//ruta desde el model

import rolRouter from './roles.routes'
import userRouter from './users.routes'
import authRouter from './auth.routes'
import productRouter from './product.routes'

dotenv.config()

const URL = process.env.URL
const routes = Router()

//ruta

routes.use(`${URL}/rol`, rolRouter)
routes.use(`${URL}/user`, userRouter)
routes.use(`${URL}/auth`, authRouter)
routes.use(`${URL}/product`, productRouter)



export default routes