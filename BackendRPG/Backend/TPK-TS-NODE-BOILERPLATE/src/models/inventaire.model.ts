import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
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

	@OneToMany(() => Stuff, (stuff) => stuff.inventaire)
  public stuff?: Stuff[];
}

export { Inventaire };