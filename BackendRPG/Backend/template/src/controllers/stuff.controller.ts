/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Pnj } from '../models/pnj.model';
import { Stuff } from '../models/stuff.model';

class StuffController {

	static stuffRepository: Repository<Stuff> | null = null;
	static pnjRepository: Repository<Pnj> | null = null;

	static init() {
		StuffController.stuffRepository = getRepository(Stuff);
		StuffController.pnjRepository = getRepository(Pnj);
	}

	static getAll = async (req:Request, res:Response) => {
		const allStuff = await StuffController.stuffRepository!.createQueryBuilder('stuff').select().leftJoinAndSelect('stuff.pnj', 'pnj').getMany();
		res.json({allStuff});
	}

	static getById = async (req:Request, res:Response) => {
		const stuffId = req.params.id;
		const stuff = await StuffController.stuffRepository!.createQueryBuilder('stuff').select().where('stuff.id = :stuff_id', {stuff_id : stuffId}).leftJoinAndSelect('stuff.pnj', 'pnj').getOne();

		if (stuff === undefined) {
			throw new Error('Stuff not found');
		}
		
		res.json({stuff});
	}

	static create = async (req:Request, res:Response) => {
		req.body.pnj = await StuffController.pnjRepository!.findOne(req.body.pnj);
		const newStuff = StuffController.stuffRepository!.create(req.body as Record<string, any>);
		await StuffController.stuffRepository!.save(newStuff);
		return res.json(newStuff);
	}

	static update = async (req:Request, res:Response) => {
		const stuffId = req.params.id;
		const stuff = await StuffController.stuffRepository!.findOne(stuffId);

		if (stuff === undefined) {
			throw new Error('Stuff not found');
		}

		req.body.pnj = await StuffController.pnjRepository!.findOne(req.body.pnj);
		const mergedStuff = StuffController.stuffRepository!.merge(stuff, req.body);

		await StuffController.stuffRepository!.save(mergedStuff);

		return res.json(mergedStuff);
	}

	static delete = async (req:Request, res:Response) => {
		const stuffId = req.params.id;
		const stuff = await StuffController.stuffRepository!.findOne(stuffId);

		if (stuff === undefined) {
			throw new Error('Stuff not found');
		}

		await StuffController.stuffRepository!.remove(stuff);

		return res.json({
			status: 'success'
		});
	}

}

export { StuffController };