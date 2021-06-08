import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';
import { Monsters } from './monsters.model';
import { Pnj } from './pnj.model';
import { User } from './user.model';

@Entity()
export class Partie extends BaseModel{

    @Column({
        nullable: false,
        unique: true
    })
    public name?:string

    @ManyToMany(()=> Pnj, pnj => pnj.partie)
    @JoinTable({
        name: 'PartieUPnj'
    })
    public pnj?: Pnj[];

    @ManyToMany(()=> Monsters, monsters => monsters.partie)
    @JoinTable({
        name: 'PartieUMonsters'
    })
    public monsters?: Monsters[];   
    
    @OneToOne(()=> User)
    @JoinColumn()
    public user? : User

    @OneToOne(()=> Heroes)
    @JoinColumn()
    public heroes? : Heroes
    
}