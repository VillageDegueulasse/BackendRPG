import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';
import { Partie } from './partie.model';


@Entity()
export class User extends BaseModel{
    @Column('varchar', {
        nullable:false
    })
    public pseudo?: string;

    @Column('varchar', {
        nullable : false,
        unique : true
    })
    public email?:string;  
    
    @Column({
        nullable: false,
        length: 1024,
        select : false
    })
    public password!: string;   

    @OneToOne(()=> Heroes)
    @JoinColumn()
    public heroes? : Heroes

    @OneToOne(() => Partie, partie => partie.user) // specify inverse side as a second parameter
    public partie?: Partie;
    
}