import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Heroes } from './heroes.model';
import { Loots } from './loots.model';
import { Stuff } from './stuff.model';

@Entity()
class Inventaire extends BaseModel {
	@Column({
		nullable:false
	})
	public nom!:string;

	@Column({
		nullable:false
	})
	public poids!:number;

	@ManyToOne(() => Stuff, (stuff) => stuff.inventaire)
    public stuff?: Stuff;
	@OneToMany(() => Loots, (loots) => loots.inventaire)
    public loots?: Loots[];
	
	@OneToOne(() => Heroes, heroes => heroes.inventaire) // specify inverse side as a second parameter
    public heroes?: Heroes;
}

export { Inventaire };