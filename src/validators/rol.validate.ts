import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import validateResult from '../helpers/validate.helper'

const rolValidate = [
  check('rol')
  .exists()
  .not()
  .isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next)
  },
]

export default rolValidate