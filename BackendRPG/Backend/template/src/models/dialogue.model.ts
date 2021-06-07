import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Pnj } from './pnj.model';

@Entity()
class Dialogue extends BaseModel {
	@Column({
		nullable:false,
		unique:true
	})
	public text!:string;

	@ManyToOne(() => Pnj, (pnj) => pnj.dialogue)
    public pnj?: Pnj;
}

export { Dialogue };