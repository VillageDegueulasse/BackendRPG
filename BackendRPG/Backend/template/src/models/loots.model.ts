import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Inventaire } from './inventaire.model';
import { Monsters } from './monsters.model';
enum Types{
    or,
    cuivre,
    argent
}
@Entity()
export class Loots extends BaseModel {
            @Column('varchar', {
                nullable:false,
                unique:true
            })
            public types? : Types
            @Column('integer', {
                nullable: false
            })
            public poids?:number
            @Column('integer', {
                nullable:false
            })
            public gold? :number
 
            @ManyToOne(()=> Monsters, monsters => monsters.loots)
            public monsters? : Monsters

            @ManyToOne(() => Inventaire, (inventaire) => inventaire.loots)
            public inventaire?: Inventaire;



}