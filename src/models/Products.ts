import {Entity, PrimaryGeneratedColumn, RelationId, ManyToOne, Column} from 'typeorm'
import { Categories } from './Categories'

@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne( type => Categories)
    categories: Categories
    @RelationId( (products: Products) => products.categories)
    categoriesId: number


    @Column()
    name: string

    @Column({ type: 'datetime', precision: 19, scale: 2,default: 0.0})
    price: number

    @Column()
    stock: number

    @Column()
    minimunStock: number

    @Column()
    code: number

    @Column({ type: 'decimal', precision: 19, scale: 2, default: 0.0})
    totalStimated: number

    @Column({ default: true})
    state: boolean

}