import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
class Dialogue extends BaseModel {
	@Column({
		nullable:false,
		unique:true
	})
	public text!:string;
}

export { Dialogue };