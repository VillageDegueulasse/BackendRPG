import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Loots } from './loots.model';
import { Partie } from './partie.model';


@Entity()
export class Monsters extends BaseModel{
    @Column({
        type: 'enum',
        nullable : false,       
        enum : ['Slime', 'Sanglier', 'Troll']       
    })
    public name?: string   
    @Column('varchar', {
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

    @ManyToOne(()=> Loots, loots => loots.monsters)
    public loots ?:Loots[];
    
    @ManyToMany(()=> Partie, parties => parties.monsters)
    public partie? : Partie[];
}