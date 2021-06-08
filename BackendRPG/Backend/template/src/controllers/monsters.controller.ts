import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Loots } from '../models/loots.model';
import { Monsters } from '../models/monsters.model';
import { LootController } from './loots.controller';


class MonstersController {
    static monsterRepository: Repository<Monsters> | null = null;
    static lootRepository: Repository<Loots> | null = null;

    static init(){
        MonstersController.monsterRepository = getRepository(Monsters);
        LootController.lootRepository = getRepository(Loots);
    }

    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
        const tab = ['or', 'cuivre', 'argent'];
        const tab1 = ['Slime', 'Sanglier', 'Troll'];
        const number = Math.floor(Math.random() * 3);
        const test = tab[number];
        const test1 = tab1[number].toString();
        
        
        const newLoot = LootController.lootRepository?.create({
            types: tab[number]
        });
        
                     
        await LootController.lootRepository?.save(newLoot); 
        const lootId = await LootController.lootRepository?.findOne(newLoot?.id);
        
        const newMonster = MonstersController.monsterRepository?.create({
            name: test1,
            pointDeVie: req.body.pointDeVie,
            defense: req.body.defense,
            attaque: req.body.attaque,
            image: req.body.image,
            loots: lootId
        });     
        await MonstersController.monsterRepository?.save(newMonster);

        return res.json(newMonster);        
    };
    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const monsters = await MonstersController.monsterRepository?.findOne(id, {relations: ['loots']});
        if (monsters === undefined) {
            throw new Error('monsters not found');
        }
        return res.json(monsters);
    };
    static findAll = async (req: Request, res: Response) => {
        const monsterss = await MonstersController.monsterRepository?.find();
        return res.json({ monsterss });
    };
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const monsters = await MonstersController.monsterRepository?.findOne(id);

        if (monsters === undefined) {
            throw new Error('monsters not found'); }

        const mergemonsters = MonstersController.monsterRepository?.merge(monsters, req.body);
        await MonstersController.monsterRepository!.save(mergemonsters);
        return res.json(mergemonsters);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const monsters = await MonstersController.monsterRepository!.findOne(id);
        if (monsters === undefined) {
            throw new Error('monsters not found');
        }
        
        await MonstersController.monsterRepository!.remove(monsters);

        return res.json({
            status : 'success'
        });
    };


}

export {MonstersController};