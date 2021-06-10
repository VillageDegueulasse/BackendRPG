import { BeforeInsert, Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Loots } from './loots.model';
import { Map } from './map.model';
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

    @OneToMany(()=> Map, map => map.monster)
    public map?: Map;

    @ManyToMany(() => Partie, (partie) => partie.monster)
	public partie?: Partie[];
    @BeforeInsert()
    public generate(){
     
        if(this.name === 'Slime'){
            this.pointDeVie = 40;
            this.defense = 10;
            this.attaque = 5;
            this.image = 'asset/Slime.jpg';
        }
        else if(this.name === 'Sanglier'){
            this.pointDeVie = 60;
            this.defense = 50;
            this.attaque = 20;   
            this.image = 'asset/sanglier.jpg';
        } else {
            this.pointDeVie = 70;
            this.defense = 100;
            this.attaque = 150;  
            this.image = 'asset/Troll.jpg';
        }
                     
    }
   
}