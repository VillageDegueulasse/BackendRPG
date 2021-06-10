import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Heroes } from '../models/heroes.model';
import { Monsters } from '../models/monsters.model';
import { Partie } from '../models/partie.model';
import { Pnj } from '../models/pnj.model';
import { User } from '../models/user.model';

class PartieController{
    static partieRepository: Repository<Partie> | null = null;
    static userRepository: Repository<User> | null = null;
    static heroesRepository: Repository<Heroes> | null = null;
    static monsterRepository: Repository<Monsters> | null = null;
    static pnjRepository: Repository<Pnj> | null = null;


    static init(){
        PartieController.partieRepository = getRepository(Partie);
        PartieController.userRepository = getRepository(User);
        PartieController.heroesRepository = getRepository(Heroes);
        PartieController.monsterRepository = getRepository(Monsters);
        PartieController.pnjRepository = getRepository(Pnj);
    }

    static create = async (req: Request, res: Response) =>{
        
        const user = await PartieController.userRepository?.findOne(req.body.user);     
        const heroes = await PartieController.userRepository?.findOne(req.body.heroes);
        const monster = await PartieController.monsterRepository?.findByIds(req.body.monster);    
        const pnj = await PartieController.pnjRepository?.findByIds(req.body.pnj);    
        const newPartie = PartieController.partieRepository?.create({
            name : req.body.name,
            user,
            heroes,
            monster,
            pnj  
        });
        
        await PartieController.partieRepository?.save(newPartie);
        return res.json(newPartie); 
    }

    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const partie = await PartieController.partieRepository?.findOne(id, {relations: ['heroes', 'monster', 'pnj']});
        if (partie === undefined) {
            throw new Error('partie not found');
        }
        return res.json(partie);
    };
    static findAll = async (req: Request, res: Response) => {
        const parties = await PartieController.partieRepository?.find();
        return res.json({ parties });
    };
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const partie = await PartieController.partieRepository?.findOne(id);

        if (partie === undefined) {
            throw new Error('partie not found'); }

        const mergepartie = PartieController.partieRepository?.merge(partie, req.body);
        await PartieController.partieRepository!.save(mergepartie);
        return res.json(mergepartie);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const partie = await PartieController.partieRepository!.findOne(id);
        if (partie === undefined) {
            throw new Error('partie not found');
        }
        
        await PartieController.partieRepository!.remove(partie);

        return res.json({
            status : 'success'
        });
    };

}

export {PartieController};