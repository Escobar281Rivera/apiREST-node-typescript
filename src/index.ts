import 'reflect-metadata'
import { AppDataSource } from './data-source'
import dotenv from 'dotenv'
import Server from './server/server'
import { error } from 'console'

dotenv.config()

const server = new Server()
server.listen()

AppDataSource.initialize().then(async(conection)=> {
    if(conection){
        console.log('Conection with database is success')
    }
}).catch((error) => console.log(error +'Error conection with database')+ error)
