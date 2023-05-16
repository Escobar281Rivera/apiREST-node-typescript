import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, } from 'typeorm'
import bcrypt from 'bcryptjs'
import { Rol } from './Rol'

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Rol)
    rol: Rol

    @RelationId((user: User) => user.rol)
    rolId: number

    @Column()
    email: string

    @Column()
    pass: string

    @Column()
    name: string

    @Column()
    last: string

    @Column()
    age: number

    @Column({default: true})
    state: boolean

    //encriptar pass
    hashPassword():void{
        const salt = bcrypt.genSaltSync(10)
        this.pass = bcrypt.hashSync(this.pass, salt)
    }

    checkPassword(pass: string){
        return bcrypt.compareSync(pass, this.pass)
    }
}