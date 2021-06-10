import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';
import { Monsters } from './monsters.model';
import { Pnj } from './pnj.model';
import { User } from './user.model';

@Entity()
class Partie extends BaseModel {
    @Column('varchar', {
        unique :true,
        nullable : false
    })
    public name? : string
    
    @OneToOne(()=> User)
    @JoinColumn()
    public user? : User

    @OneToOne(()=> Heroes)
    @JoinColumn()
    public heroes? : Heroes

    @ManyToMany(() => Pnj, (pnj) => pnj.partie)
    @JoinTable({
        name : 'PartieUPnj'
    })
    public pnj?: Pnj[];
    
    @ManyToMany(() => Monsters, (monster) => monster.partie)
    @JoinTable({
        name : 'PartieUMonster'
    })
    public monster?: Monsters[];
}

export {Partie};