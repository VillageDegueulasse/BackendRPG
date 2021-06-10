import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';
import { Partie } from './partie.model';
import bcrypt from 'bcrypt';


@Entity()
export class User extends BaseModel{
    @Column('varchar', {
        nullable:false
    })
    public name!: string;

    @Column('varchar', {
        nullable : false,
        unique : true
    })
    public email!:string;  
    
    @Column('varchar', {
        nullable: false,
        length: 1024,
        select : false
    })
    public password!: string;   

    @OneToOne(() => Heroes, heroes => heroes.user) 
    public heroes!: Heroes;

    @OneToOne(() => Partie, partie => partie.user) 
    public partie!: Partie;

    @BeforeInsert()
    @BeforeUpdate()
    public hashPassword(){        
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10) );
    }
   
    
}