import {Request, Response, NextFunction} from 'express'
import { check } from 'express-validator'
import  validateResult  from '../helpers/validate.helper'

const userValidate = [
    check('rolId')
    .exists()
    .not()
    .isEmpty(),
    check('email')
    .exists()
    .isEmail() //type email
    .not()//no va basio
    .isEmpty(),
    check('pass')
    .exists()
   .isLength({min: 4, max: 8})
    .not()
   .isEmpty(),
    check('name')
    .exists()
    .not()
    .isEmpty(),
    check('last')
    .exists()
    .not()
    .isEmpty(),
    check('age')
    .exists()
    .custom((value, { req }) => {
        if( value <18 || value>50){
            throw new Error('La edad no puede ser menor a 18 o mayor 50')
        }
        return true
      })
    .isNumeric()
    .not()
    .isEmpty(),
    //Verifica, Retornar error o Seguir el flujo del controlador
    (req:Request, res:Response, next:NextFunction) => {
        validateResult(req, res, next)
    },
]

export default userValidate

