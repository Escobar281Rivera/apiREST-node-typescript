import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { Investment } from './Investment'

@Entity()
export class DetailInvestment {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(type =>Investment, investment => investment.detailInvestment)
    investment? : Investment[]

    @Column({ type: 'decimal', precision: 19, scale: 2, default: 0.0})
    total: number

    @Column({ type: 'date'})
    startDate: Date

    @Column({ type: 'date'})
    endDate: Date

    @Column({default: true})







    state: boolean
}