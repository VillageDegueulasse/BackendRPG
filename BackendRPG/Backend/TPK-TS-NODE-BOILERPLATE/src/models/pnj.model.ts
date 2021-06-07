import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.model';
import { Dialogue } from './dialogue.model';
import { Stuff } from './stuff.model';

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

	@OneToMany(() => Dialogue, (dialogue) => dialogue.pnj)
    public dialogue?: Dialogue[];

	@OneToMany(() => Stuff, (stuff) => stuff.pnj)
  public stuff?: Stuff[];
}

export { Pnj };