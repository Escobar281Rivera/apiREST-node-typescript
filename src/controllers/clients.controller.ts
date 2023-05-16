import { Client } from "../models/Client";
import { AppDataSource } from "../data-source";
import {Request, Response} from 'express'
import { loadavg } from "os";

class ClientController{
    //List
    static listClient = async(req:Request, res: Response) => {
        const repoClients = AppDataSource.getRepository(Client)

        try {
            const clients = await repoClients.find({
                where:{ state: true},
            })
            return clients
            ? res.json({ ok: true, msg: 'List of Clients'})
            : res.json({ ok: false, msg: 'Data not found in data base', clients})
        } catch (e) {
            return res.json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    };

    //byId
    static byIdClient = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const repoClient = AppDataSource.getRepository(Client)

        try {
            const client = await repoClient.findOne({
                where:{id},
            })
            return client
            ? res.json({ok: true, client})
            : res.json({ok: false, msg: `The id ${id} not found in data base`})
        } catch (e) {
            return res.json({
                ok: false,
                msg: `Error => ${e}`
            })
        }
    };

    static createClient = async(req: Request, res: Response) => {
        const {name, last} = req.body
        const repoClient = AppDataSource.getRepository(Client)

        try {
            const client = new Client()

            client.name = name,
            client.last = last

            await repoClient.save(client)
            return res.json({
                ok: true,
                msg: 'Client was create'
            })
        } catch (e) {
            return res.json({
                ok: true,
                msg: `Error => ${e}`
            })
        }
    };
    //update
    static updateClient = async(req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const {name, last} = req.body
        const repoClient = AppDataSource.getRepository(Client)
        let client: Client;
        try {
            
        } catch (e) {
            return res.json({
                ok: true,
                msg:`Error => ${e}`
            })
        }

    }

}

export default ClientController