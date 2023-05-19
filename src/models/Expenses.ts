import { Entity, Column, PrimaryGeneratedColumn,} from 'typeorm'

@Entity()
export class Expenses{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descriptions: string

    @Column()
    type: string

    @Column()
    howMuch: number

    @Column({type:'datetime' ,default:() => 'CURRENT_TIMESTAMP'})
    date: Date
}