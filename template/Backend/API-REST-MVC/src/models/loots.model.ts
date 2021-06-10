import { BeforeInsert, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Inventaire } from './inventaire.model';
import { Monsters } from './monsters.model';
type Types = 'or'|'cuivre'|'argent'
@Entity()
export class Loots extends BaseModel {
            @Column({
                type:'enum',
                nullable:false,
                enum:['or', 'cuivre', 'argent']
            })
            public types? : string
            @Column()               
            
            public poids?:number
            
            @Column({
                nullable:false
            })
            public gold? :number
            @BeforeInsert()
            public generate(){
                this.poids = Math.ceil(Math.random()*40);
                if(this.types === 'or'){
                    
                    this.gold = this.poids * 10; 
                }
                else if(this.types === 'cuivre'){
                    this.gold = this.poids * 5;   
                } else {
                    this.gold = this.poids * 6; 
                }
                             
            }
            
 
            @OneToMany(()=> Monsters, monsters => monsters.loots)
            public monsters? : Monsters

            @ManyToOne(() => Inventaire, (inventaire) => inventaire.loots)
            public inventaire?: Inventaire;



}