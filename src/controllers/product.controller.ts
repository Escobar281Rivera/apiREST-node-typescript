import {Request, Response} from 'express'
import { AppDataSource } from '../data-source'
import { Products } from '../models/Products'

const repoProducts = AppDataSource.getRepository(Products) 
class ProductsController{
    //list
    static listProducts = async(req: Request, res: Response) => {
        
        try {
            const products = await repoProducts.find({
                where: {state: true,}
            })
            return products.length > 0
            ? res.json({ ok: true, products })
            : res.json({ ok: false, msg: 'Data not found' + products})
        } catch (e) {
            res.status(500).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    };
    //byId
    static byIdProducts = async( req: Request, res: Response) => {
        const id = parseInt(req.params.id)

        try {
            const product = await repoProducts.findOne({
                where: { id, state: true } 
            })
            return product 
            ? res.json({ ok: true, product})
            : res.status(404).json({ ok: false, msg : `This id ${id} dont exist in data base `})

        } catch (e) {
            return res.status(500).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    };

    //create
    static createProduct = async(req: Request, res: Response) => {
        const { categoriesId, name, price, stock, minimunStock, code, totalStimated} = req.body

        try {
            const productExist = await repoProducts.findOne({
                where: { code },
            })
            if(productExist){
                throw new Error (`code ${code} already exist in data base`)
            }else{

                const products = new Products()

                products.categories = categoriesId
                products.name = name,
                products.price = price,
                products.stock = stock,
                products.minimunStock = minimunStock,
                products.code = code,
                products.totalStimated = totalStimated,

                await repoProducts.save(products)
                return res.status(200).json({
                    ok: true,
                    msg: 'Product was created'
                })
            }
        } catch (e) {
            return res.status(500).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    }
    //Code 
    static codeProduct = async(req: Request, res: Response) => {
        const {code} = req.body

        try {
            const codeProduct = repoProducts.findOne({
                where: { code },
            })
            if(!codeProduct){
                throw new Error (`This code:${ code } dont exist in data base`)
            }else{
                return res.json({
                    ok: true,
                    data: codeProduct
                })
            }
            
        } catch (e) {
            return res.status(500).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    } 
}

export default ProductsController