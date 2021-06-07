import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './Base.models';
import { Loots } from './Loots.models';

@Entity()
export class Monsters extends BaseModel{
    @Column('varchar', {
        nullable : false,
        unique:true
    })
    public name? : string
    @Column('integer', {
        nullable:false
    })
    public pointDeVie? : number

    @Column('integer', {
        nullable : false
    })
    public defense?:number
    @Column('integer', {
        nullable : false
    })
    public attaque?: number
    @Column('varchar', {
        nullable: false
    })
    public image?: string

    @OneToMany(()=> Loots, loots => loots.monsters)
    public loots ?:Loots[];
}