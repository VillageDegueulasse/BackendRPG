import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Inventaire } from './inventaire.model';
import { Pnj } from './pnj.model';

enum types {
	'armes',
	'habit',
	'objet'
}

@Entity()
class Stuff extends BaseModel {
	@Column('varchar', {
		nullable:false
	})
	public type!:types;

	@Column({
		nullable:false
	})
	public poids!:number;

	@Column({
		nullable:false
	})
	public gold!:number;
	@Column({
		nullable:false
	})
	public attaque!:number;
	@Column({
		nullable:false
	})
	public defense!:number;
	@Column({
		nullable:false
	})
	public buff!:number;

	@ManyToOne(() => Pnj, (pnj) => pnj.stuff)
  public pnj?: Pnj;

	@OneToMany(() => Inventaire, (inventaire) => inventaire.stuff)
  public inventaire?: Inventaire[];
}

export { Stuff };