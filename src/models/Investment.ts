import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { DetailInvestment } from './Detail-Investment'

@Entity()

export class Investment{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => DetailInvestment,(detailInvestment: DetailInvestment) => detailInvestment.investment)
    detailInvestment: DetailInvestment
    
    @Column()
    category: string
    // defino como sera el total
    @Column({type:'decimal', precision:19, scale: 2, default: 0.0})
    total: number

    @Column({ default: true})
    state: boolean
}