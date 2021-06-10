import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Monsters } from './monsters.model';
import { Pnj } from './pnj.model';


@Entity()
class Map extends BaseModel {    

    @Column('varchar', {        
        nullable : false,
        unique : true
    })
    public lieu! : string

    @ManyToOne(() => Pnj, pnj => pnj.map)
    public pnj?: Pnj[]

    @ManyToOne(() => Monsters, monster => monster.map)
    public monster?: Monsters[]

    


    
    
}

export {Map};