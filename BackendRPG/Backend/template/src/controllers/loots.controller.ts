import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Loots } from '../models/loots.model';


class LootController {
    static lootRepository: Repository<Loots> | null = null;

    static init(){
        LootController.lootRepository = getRepository(Loots);
    }

    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
        const newLoot = LootController.lootRepository?.create(req.body);     
        await LootController.lootRepository?.save(newLoot);
        return res.json(newLoot);        
    };

    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const loot = await LootController.lootRepository?.findOne(id);
        if (loot === undefined) {
            throw new Error('loot not found');
        }
        return res.json(loot);
    };
    static findAll = async (req: Request, res: Response) => {
        const loots = await LootController.lootRepository?.find();
        return res.json({ loots });
    };
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const loot = await LootController.lootRepository?.findOne(id);

        if (loot === undefined) {
            throw new Error('loot not found'); }

        const mergeLoot = LootController.lootRepository?.merge(user, req.body);
        await LootController.lootRepository!.save(mergeLoot);
        return res.json(mergeLoot);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const loot = await LootController.lootRepository!.findOne(id);
        if (loot === undefined) {
            throw new Error('loot not found');
        }
        
        await LootController.lootRepository!.remove(loot);

        return res.json({
            status : 'success'
        });
    };

    

}

export {LootController};