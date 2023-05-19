import {Router} from 'express'
import ProductsController from '../controllers/product.controller'

const router = Router()
const product = ProductsController;

router.post('/', product.createProduct)
router.get('/', product.listProducts)
//search code => /api/?code=klADGHJALHD
router.get('/code', product.codeProduct)
router.get('/:id', product.byIdProducts)

export default router