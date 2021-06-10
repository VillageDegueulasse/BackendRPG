/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Dialogue } from '../models/dialogue.model';
import { Pnj } from '../models/pnj.model';

class DialogueController {

	static dialogueRepository: Repository<Dialogue> | null = null;
	static pnjRepository: Repository<Pnj> | null = null;

	static init() {
		DialogueController.dialogueRepository = getRepository(Dialogue);
		DialogueController.pnjRepository = getRepository(Pnj);
	}

	static getAll = async (req:Request, res:Response) => {
		const allDialogue = await DialogueController.dialogueRepository!.createQueryBuilder('dialogue').select().leftJoinAndSelect('dialogue.pnj', 'pnj').getMany();
		res.json({allDialogue});
	}
 
	static getById = async (req:Request, res:Response) => {
		const dialogueId = req.params.id;
		const dialogue = await DialogueController.dialogueRepository!.createQueryBuilder('dialogue').select().where('dialogue.id = :dialogue_id', {dialogue_id : dialogueId}).leftJoinAndSelect('dialogue.pnj', 'pnj').getOne();

		if (dialogue === undefined) {
			throw new Error('Dialogue not found');
		}
		
		res.json({dialogue});
	}

	static create = async (req:Request, res:Response) => {
		req.body.pnj = await DialogueController.pnjRepository!.findOne(req.body.pnj);
		const newDialogue = DialogueController.dialogueRepository!.create(req.body as Record<string, any>);
		await DialogueController.dialogueRepository!.save(newDialogue);
		return res.json(newDialogue);
	}

	static update = async (req:Request, res:Response) => {
		const dialogueId = req.params.id;
		const dialogue = await DialogueController.dialogueRepository!.findOne(dialogueId);

		if (dialogue === undefined) {
			throw new Error('Dialogue not found');
		}

		req.body.pnj = await DialogueController.pnjRepository!.findOne(req.body.pnj);
		const mergedDialogue = DialogueController.dialogueRepository!.merge(dialogue, req.body);

		await DialogueController.dialogueRepository!.save(mergedDialogue);

		return res.json(mergedDialogue);
	}

	static delete = async (req:Request, res:Response) => {
		const dialogueId = req.params.id;
		const dialogue = await DialogueController.dialogueRepository!.findOne(dialogueId);

		if (dialogue === undefined) {
			throw new Error('Dialogue not found');
		}

		await DialogueController.dialogueRepository!.remove(dialogue);

		return res.json({
			status: 'success'
		});
	}

}

export { DialogueController };