import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Providers{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column({default: true})
    state: boolean
}