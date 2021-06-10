import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Inventaire } from '../models/inventaire.model';
import { Loots } from '../models/loots.model';
import { Monsters } from '../models/monsters.model';
import { HeroesController } from './heroes.controller';
import { InventaireController } from './inventaire.controller';
import { LootController } from './loots.controller';


class MonstersController {
    static monsterRepository: Repository<Monsters> | null = null;
    static lootRepository: Repository<Loots> | null = null;
    static inventaireRepository: Repository<Inventaire> | null = null;

    static init(){
        MonstersController.monsterRepository = getRepository(Monsters);
        LootController.lootRepository = getRepository(Loots);
        MonstersController.lootRepository = getRepository(Loots);
        MonstersController.inventaireRepository = getRepository(Inventaire);

    }

    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
        const tab = ['or', 'cuivre', 'argent'];
        const tab1 = ['Slime', 'Sanglier', 'Troll'];
        const number = Math.floor(Math.random() * 3);
        const types = tab[number];
        const name = tab1[number].toString();
        
        
        const newLoot = LootController.lootRepository?.create({
            types
        });
        
                     
        await LootController.lootRepository?.save(newLoot); 
        const loots = await LootController.lootRepository?.findOne(newLoot?.id);
        
        const newMonster = MonstersController.monsterRepository?.create({
            name,
            pointDeVie: req.body.pointDeVie,
            defense: req.body.defense,
            attaque: req.body.attaque,
            image: req.body.image,
            loots
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
        const monsterss = await MonstersController.monsterRepository?.find({relations :['loots']});
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
        const monsters = await MonstersController.monsterRepository!.findOne(id, {relations :['loots']});
        console.log('je suis ici monstrelootid', monsters);
        
        const lootMonster = await MonstersController.lootRepository!.findOne(monsters?.loots?.id);
        console.log('je suis ici', lootMonster);

        
        const inventaire = await MonstersController.inventaireRepository!.findOne(req.body.inventaireId);
        console.log('test', inventaire?.id);
        
        const updateLoots = await MonstersController.lootRepository!.merge(lootMonster, {
            types: lootMonster?.types,
            poids: lootMonster?.poids,
            gold: lootMonster?.gold,
            inventaire : inventaire?.id
        });    
        // console.log('test', updateLoots);
        
        await MonstersController.lootRepository!.save(updateLoots);
        if (monsters === undefined) {
            throw new Error('monsters not found');
        }
        await MonstersController.monsterRepository!.remove(monsters);
        
        
        // await LootController.lootRepository!.remove(lootMonster);

        return res.json({
            status : 'success'
        });
    };


}

export {MonstersController};