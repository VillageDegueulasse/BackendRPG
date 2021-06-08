/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Inventaire } from '../models/inventaire.model';
import { Stuff } from '../models/stuff.model';

class InventaireController {

	static inventaireRepository: Repository<Inventaire> | null = null;
	static stuffRepository: Repository<Stuff> | null = null;

	static init() {
		InventaireController.inventaireRepository = getRepository(Inventaire);
		InventaireController.stuffRepository = getRepository(Stuff);
	}

	static getAll = async (req:Request, res:Response) => {
		const allInventaire = await InventaireController.inventaireRepository!.createQueryBuilder('inventaire').select().leftJoinAndSelect('inventaire.stuff', 'stuff').getMany();
		res.json({allInventaire});
	}

	static getById = async (req:Request, res:Response) => {
		const inventaireId = req.params.id;
		const inventaire = await InventaireController.inventaireRepository!.createQueryBuilder('inventaire').select().where('inventaire.id = :inventaire_id', {inventaire_id : inventaireId}).leftJoinAndSelect('inventaire.stuff', 'stuff').getOne();

		if (inventaire === undefined) {
			throw new Error('Inventaire not found');
		}
		
		res.json({inventaire});
	}

	static create = async (req:Request, res:Response) => {
		req.body.stuff = await InventaireController.stuffRepository!.findOne(req.body.stuff);
		const newInventaire = InventaireController.inventaireRepository!.create(req.body as Record<string, any>);
		await InventaireController.inventaireRepository!.save(newInventaire);
		return res.json(newInventaire);
	}

	static update = async (req:Request, res:Response) => {
		const inventaireId = req.params.id;
		const inventaire = await InventaireController.inventaireRepository!.findOne(inventaireId);

		if (inventaire === undefined) {
			throw new Error('Inventaire not found');
		}

		const mergedInventaire = InventaireController.inventaireRepository!.merge(inventaire, req.body);

		await InventaireController.inventaireRepository!.save(mergedInventaire);

		return res.json(mergedInventaire);
	}

	static delete = async (req:Request, res:Response) => {
		const inventaireId = req.params.id;
		const inventaire = await InventaireController.inventaireRepository!.findOne(inventaireId);

		if (inventaire === undefined) {
			throw new Error('Inventaire not found');
		}

		req.body.stuff = await InventaireController.stuffRepository!.findOne(req.body.stuff);
		await InventaireController.inventaireRepository!.remove(inventaire);

		return res.json({
			status: 'success'
		});
	}

}

export { InventaireController };