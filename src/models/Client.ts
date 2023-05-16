import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    last: string

    @Column({ type: 'time', default: '00:00:00'})
    dateRegister: Date

    @Column({ default: true})
    state: boolean
}