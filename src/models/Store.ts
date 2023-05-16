import { PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()

export class Store{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    addres: string

    @Column()
    phone: string

    @Column({default: true})
    state: boolean
}