import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';


type Name = 'mage' | 'guerrier' | 'chasseur';

@Entity()
export class Personnage extends BaseModel{
    @Column({
        type: 'enum',
        nullable : false,
        unique:true,
        enum : ['mage', 'guerrier', 'chasseur']       
    })

    public name?: Name
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
    @Column({
        nullable: false
    })
    public image?: string

    @Column( {
    type: 'enum',   
    enum : ['batton', 'arc', 'épée']})
    public arme?:string

    @BeforeInsert()
            public generate(){                
                if(this.name === 'mage'){
                    this.pointDeVie = 100;
                    this.defense = 5;
                    this.attaque = 15;
                    this.arme = 'batton';
                    this.image = 'asset/mage.jpg';
                    this.gold =0; 
                }
                else if(this.name === 'guerrier'){
                    this.pointDeVie = 100;
                    this.defense = 5;
                    this.attaque = 30;
                    this.arme = 'épée';
                    this.image = 'asset/guerrier.jpg';
                    this.gold =0; 
                } else {
                    this.pointDeVie = 100;
                    this.defense = 15;
                    this.attaque = 15;
                    this.arme = 'arc';
                    this.image = 'asset/chasseur.jpg';
                    this.gold =0; 
                  }             
                             
            }



    
        
    

    @OneToMany(()=> Heroes, heroes => heroes.personnage)
    public heroes?:Heroes[];
}