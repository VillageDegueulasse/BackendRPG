import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Personnage } from '../models/personnage.model';

class PersonnageController{
    static personnaRepository: Repository<Personnage> | null = null;


    static init() {
        PersonnageController.personnaRepository = getRepository(Personnage);
    }

    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
        const newPersonnage = PersonnageController.personnaRepository?.create(req.body);     
        await PersonnageController.personnaRepository?.save(newPersonnage);
        return res.json(newPersonnage);        
    };
    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const personnage = await PersonnageController.personnaRepository?.findOne(id);
        if (personnage === undefined) {
            throw new Error('personnage not found');
        }
        return res.json(personnage);
    };
    static findAll = async (req: Request, res: Response) => {
        const personnages = await PersonnageController.personnaRepository?.find();
        return res.json({ personnages });
    };
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const personnage = await PersonnageController.personnaRepository?.findOne(id);

        if (personnage === undefined) {
            throw new Error('personnage not found'); }

        const mergePersonnage = PersonnageController.personnaRepository?.merge(personnage, req.body);
        await PersonnageController.personnaRepository!.save(mergePersonnage);
        return res.json(mergePersonnage);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const personnage = await PersonnageController.personnaRepository!.findOne(id);
        if (personnage === undefined) {
            throw new Error('personnage not found');
        }
        
        await PersonnageController.personnaRepository?.remove(personnage);

        return res.json({
            status : 'success'
        });
    };
}

export {PersonnageController};