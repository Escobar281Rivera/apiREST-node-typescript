import { User } from './../models/User';
import { Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { tokenSign } from '../helpers/jwt.helper'



class AuthController {
  static login = async (req: Request, res: Response) => {
    const { email, pass } = req.body
    const repoAuth = AppDataSource.getRepository(User)
    let user: User
    try {
        //Consulta a la entidad
      user = await repoAuth.findOneOrFail({
        relations: { rol: true },
        select: ['id', 'email', 'pass'],
        where: { email: email },
      })
    } catch (e) {
      return res.status(400).json({
        ok: false,
        msg: 'Email or password incorrect',
      })
    }
    //Verifica contraseña encriptada
    if (!user.checkPassword(pass)) {
      return res.status(400).json({
        ok: false,
        msg: 'Email or password incorrect',
      })
    }

    if (user.state == false) {
      res.json({ ok: false, msg: 'Acceso denegado' })
    } else {
      user.pass = undefined
      //Agregamos el tokken
      const token = await tokenSign(user)
     //le enviamos la data
      return res.json({
        ok: true,
        msg: 'authorized',
        data: user,
        token,
      })
    }
  }

}

export default AuthController