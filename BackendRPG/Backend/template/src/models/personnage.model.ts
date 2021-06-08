import { Column, Entity, OneToMany } from 'typeorm';
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
    @Column({
        nullable: false
    })
    public image?: string

    @OneToMany(()=> Heroes, heroes => heroes.personnage)
    public heroes?:Heroes[];
}