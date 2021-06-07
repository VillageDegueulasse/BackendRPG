import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

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
}

export { Inventaire };