/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Pnj } from '../models/pnj.model';

class PnjController {

	static pnjRepository: Repository<Pnj> | null = null;

	static init() {
		PnjController.pnjRepository = getRepository(Pnj);
	}

	static getAll = async (req:Request, res:Response) => {
		const allPnj = await PnjController.pnjRepository!.createQueryBuilder('pnj').select().leftJoinAndSelect('pnj.dialogue', 'dialogue').leftJoinAndSelect('pnj.stuff', 'stuff').leftJoinAndSelect('pnj.partie', 'partie').getMany();
		res.json({allPnj});
	}

	static getById = async (req:Request, res:Response) => {
		const pnjId = req.params.id;
		const pnj = await PnjController.pnjRepository!.createQueryBuilder('pnj').select().where('pnj.id = :pnj_id', {pnj_id : pnjId}).getOne();

		if (pnj === undefined) {
			throw new Error('Pnj not found');
		}
		
		res.json({pnj});
	}

	static create = async (req:Request, res:Response) => {
		const newPnj = PnjController.pnjRepository!.create(req.body as Record<string, any>);
		await PnjController.pnjRepository!.save(newPnj);
		return res.json(newPnj);
	}

	static update = async (req:Request, res:Response) => {
		const pnjId = req.params.id;
		const pnj = await PnjController.pnjRepository!.findOne(pnjId);

		if (pnj === undefined) {
			throw new Error('Pnj not found');
		}

		const mergedPnj = PnjController.pnjRepository!.merge(pnj, req.body);

		await PnjController.pnjRepository!.save(mergedPnj);

		return res.json(mergedPnj);
	}

	static delete = async (req:Request, res:Response) => {
		const pnjId = req.params.id;
		const pnj = await PnjController.pnjRepository!.findOne(pnjId);

		if (pnj === undefined) {
			throw new Error('Pnj not found');
		}

		await PnjController.pnjRepository!.remove(pnj);

		return res.json({
			status: 'success'
		});
	}

}

export { PnjController };