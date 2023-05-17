import jwt from 'jsonwebtoken'
import { User } from '../models/User'


export const tokenSign = async (user: User) => {
  const sign = jwt.sign(
    {
      _id: user.id,
      email: user.email,
    },
    process.env.JWTSECRET || "SECRET",
    {
      expiresIn: '24h',
    }
  )
  return sign
}


