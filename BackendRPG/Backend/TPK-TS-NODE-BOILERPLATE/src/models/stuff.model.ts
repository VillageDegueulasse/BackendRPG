import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
class Stuff extends BaseModel {
	@Column({
		nullable:false
	})
	public type!:string;

	@Column({
		nullable:false
	})
	public poids!:number;

	@Column({
		nullable:false
	})
	public gold!:number;
}

export { Stuff };