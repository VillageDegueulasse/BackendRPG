import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { Map, Partie } from '../models/map.model';
import { Monsters } from '../models/monsters.model';
import { Pnj } from '../models/pnj.model';


class MapController {
    static mapRepository: Repository<Map> | null = null;
    static pnjRepository: Repository<Pnj> | null = null;
    static monsterRepository: Repository<Monsters> | null = null;

    static init(){
        MapController.mapRepository = getRepository(Map);
        MapController.pnjRepository = getRepository(Pnj);
        MapController.monsterRepository = getRepository(Monsters);
    }

    static create = async (req: Request, res: Response) => {        
        const pnj = MapController.pnjRepository?.findByIds(req.body.pnj);
        const monster = MapController.pnjRepository?.findByIds(req.body.monster);
        const newPartie = MapController.mapRepository?.create({
            lieu:req.body.lieu,
            pnj,
            monster
        });     
        await MapController.mapRepository?.save(newPartie);
        return res.json(newPartie);        
    };

    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const map = await MapController.mapRepository?.findOne(id, {relations : ['pnj', 'monster']});
        if (map === undefined) {
            throw new Error('map not found');
        }
        return res.json(map);
    };
    static findAll = async (req: Request, res: Response) => {
        const maps = await MapController.mapRepository?.find();
        return res.json({ maps });
    };
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const map = await MapController.mapRepository?.findOne(id);

        if (map === undefined) {
            throw new Error('map not found'); }

        const mergemap = MapController.mapRepository?.merge(map, req.body);
        await MapController.mapRepository!.save(mergemap);
        return res.json(mergemap);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const map = await MapController.mapRepository!.findOne(id);
        if (map === undefined) {
            throw new Error('map not found');
        }
        
        await MapController.mapRepository!.remove(map);

        return res.json({
            status : 'success'
        });
    };
     
}


export {MapController};