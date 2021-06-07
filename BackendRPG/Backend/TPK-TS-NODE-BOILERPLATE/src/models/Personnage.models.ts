import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './Base.models';
import { Heroes } from './Heroes.models';

enum Name{
    mage,
    chasseur,
    guerrier
}

@Entity()
export class Personnage extends BaseModel{
    @Column('varchar', {
        nullable : false,
        unique:true
    })
    public name?: Name
    @Column('varchar', {
        nullable: false
    })
    public image?: string

    @OneToMany(()=> Heroes, heroes => heroes.personnage)
    public heroes?:Heroes[];
}