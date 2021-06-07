import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseModel } from './Base.models';
import { Heroes } from './Heroes.models';

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
    
}