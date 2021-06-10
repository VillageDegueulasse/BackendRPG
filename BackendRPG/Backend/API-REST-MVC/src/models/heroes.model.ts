import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Inventaire } from './inventaire.model';
import { Partie } from './partie.model';
import { Personnage } from './personnage.model';

import { User } from './user.model';

@Entity()
export class Heroes extends BaseModel{
    @Column('varchar', {
        unique:true,
        nullable:false
    })
    public userPseudo? : string
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
    @Column('integer', {
        nullable : false
    })
    public gold?: number
    @Column('varchar', {
        nullable: false
    })
    public image?: string
    @Column('varchar', {
       
        nullable:false
    })
    public arme? : string
  
    @ManyToOne(()=> Personnage, personnage => personnage.heroes)
            public personnage? : Personnage
    
    @OneToOne(()=> Inventaire)
    @JoinColumn()
     public inventaire? : Inventaire   

    @OneToOne(()=> User)
    @JoinColumn()
    public user? : User

    @OneToOne(() => Partie, partie => partie.heroes) 
    public partie!: Partie;

   
    
}