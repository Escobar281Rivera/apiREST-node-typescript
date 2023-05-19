import {Request, Response} from 'express'
import { Providers } from '../models/Providers'
import { AppDataSource } from '../data-source'

const repoProvider = AppDataSource.getMongoRepository(Providers)

class ProvidersController {
    //list
    
    static listProviders = async(req: Request, res: Response) => {
        try {
            const providers = await repoProvider.find({
                where: {state: true}
            })
            return providers.length > 0
            ? res.json({
                ok: true,
                msg: 'List of providers in Data Base',
                providers,
            }): res.json({ ok: false, msg: 'Data not found in data base'})
        } catch (e) {
            return res.status(404).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    }
    //byId
    static byIdProvider = async(req: Request, res:Response) =>{
        const id = parseInt(req.params.id)
        
        try {
            const provider = await repoProvider.findOne({
                where:{ id },
            })
            return provider
            ? res.json({ ok: true, provider})
            : res.json({ ok: false, msg: `The id ${id} dont exist in data base `})
        } catch (e) {
            return res.status(404).json({
                ok: true,
                msg: `Error => ${e}`
            })
        }
    }
    //create 
    static createProvider = async(req: Request, res: Response) =>{
        const {name, phone} = req.body

        try {
            const  providerExist = await repoProvider.findOneOrFail({
                where: {name}
            })
            if(providerExist){
                return res.json({ok: false, msg: `This provider: ${name} exist in data base` })
            }else{
                const provider = new Providers()
                provider.name = name,
                provider.phone = phone

                await repoProvider.save(provider)
                return res.json({
                    ok: true,
                    msg: 'Provider was created success'
                })
            }
        } catch (e) {
            return res.status(404).json({
                ok: true,
                msg: `Error => ${e}`
            })
        }
    }

    static updateProvider = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const {name, phone} = req.body
        let provider: Providers;

        try {
             provider = await repoProvider.findOneOrFail({
                where: { id, state: true}
            })
            if(!provider){
                throw new Error(' Error, provider dont exist')
            }
            provider.name = name
            provider.phone = phone
            await repoProvider.save(provider)
            return res.json({
                ok: true,
                msg: 'Provider was update success'
            })
        } catch (e) {
            return res.status(404).json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    }
    //delete
    static deleteProvider = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        
        try {
            const provider = await repoProvider.findOne({
                where: { id , state: true}
            })
            if(!provider){
                throw new Error('Donst exist in data base')
            }

            provider.state = false
            await repoProvider.save(provider)
            return res.json({
                ok: true,
                msg: 'Provider was deleted success'
            })
        } catch (e) {
            return res.json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    }
}

export default ProvidersController