import dotenv from 'dotenv'
import { Router } from 'express'
//ruta desde el model
import clientRouter from './client.routes'
import rolRouter from './roles.routes'
import userRouter from './users.routes'
import authRouter from './auth.routes'

dotenv.config()

const URL = process.env.URL
const routes = Router()

//ruta
routes.use(`${URL}/client`, clientRouter)
routes.use(`${URL}/rol`, rolRouter)
routes.use(`${URL}/user`, userRouter)
routes.use(`${URL}/auth`, authRouter)



export default routes