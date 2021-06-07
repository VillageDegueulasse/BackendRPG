import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
class Pnj extends BaseModel {
	@Column({
		nullable:false,
		unique:true
	})
	public nom!:string;

	@Column({
		nullable:false,
		unique:true
	})
	public img!:string;

}

export { Pnj };