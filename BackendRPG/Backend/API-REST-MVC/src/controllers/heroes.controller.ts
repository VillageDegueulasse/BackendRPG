import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Heroes } from '../models/heroes.model';
import { Inventaire } from '../models/inventaire.model';
import { Personnage } from '../models/personnage.model';
import { User } from '../models/user.model';


class HeroesController {
    static heroesRepository: Repository<Heroes> | null = null;
    static inventaireRepository: Repository<Inventaire> | null = null;
    static userRepository: Repository<User> | null = null;
    static personnageRepository: Repository<Personnage> | null = null;


    static init() {
        HeroesController.heroesRepository = getRepository(Heroes);
        HeroesController.inventaireRepository = getRepository(Inventaire);
        HeroesController.userRepository = getRepository(User);
        HeroesController.personnageRepository = getRepository(Personnage);
    }
 
    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
 
        const userId = await HeroesController.userRepository?.findOne(req.body.user);
        
        const personnageId = await HeroesController.personnageRepository?.findOne(req.body.personnage);
        const newInventaire = await HeroesController.inventaireRepository?.create({
            poids : 0,
            nom : 'mon inventaire'                
        });
        const inventaireId = await HeroesController.inventaireRepository?.save(newInventaire);
        const inventaire = await HeroesController.inventaireRepository?.findOne(inventaireId.id);     
         
        
        const newHeroes = await HeroesController.heroesRepository?.create({
            userPseudo : userId?.name,
            pointDeVie : personnageId?.pointDeVie,
            defense : personnageId?.defense,
            attaque: personnageId?.attaque,
            gold: personnageId?.gold,
            image : personnageId?.image,
            arme:personnageId?.arme,
            personnage : personnageId,
            inventaire,
            user : userId
        });     
        
      
        await HeroesController.heroesRepository?.save(newHeroes);
        return res.json(newHeroes);        
    };

    static findHeroeByUserId = async (req : Request, res : Response) =>{
        const userId = await HeroesController.userRepository?.findOne(req.params.id, {relations : ['heroes']});
        return res.json(userId);
        
    }

    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const heroes = await HeroesController.heroesRepository?.findOne(id);
        // console.log('test', heroes);
        

        if (heroes === undefined) {
            throw new Error('heroes not found'); }

        const mergeHeroes = HeroesController.heroesRepository?.merge(heroes, req.body);
        console.log('test2', mergeHeroes);
        
        await HeroesController.heroesRepository?.save(mergeHeroes);
        return res.json(mergeHeroes);
    };

    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await HeroesController.heroesRepository?.findOne(id);
        if (user === undefined) {
            throw new Error('heroes not found');
        }
        
        await HeroesController.heroesRepository?.remove(user);
        return res.json({
            status : 'success'
        });
    };

    static findInventaireByHeroesId = async (req : Request, res : Response) =>{
        const heroes = await HeroesController.heroesRepository?.findOne(req.params.id, {relations : ['inventaire']});
        return res.json(heroes);        
    }


}


export {HeroesController};