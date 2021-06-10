import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { User } from '../models/user.model';

class UserController{    
    static userRepository: Repository<User> | null = null;


    static init() {
        UserController.userRepository = getRepository(User);
    }

    static create = async (req: Request, res: Response) => {        
        // console.log('avant', req.body.name);
        const newUser = UserController.userRepository?.create(req.body);     
        await UserController.userRepository?.save(newUser);
        return res.json(newUser);        
    };

    static findById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await UserController.userRepository?.findOne(id);
        if (user === undefined) {
            throw new Error('User not found');
        }
        return res.json(user); 
    };

    static findAll = async (req: Request, res: Response) => {
        const users = await UserController.userRepository?.find();
        return res.json({ users });
    };
    
    static update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await UserController.userRepository?.findOne(id);

        if (user === undefined) {
            throw new Error('User not found'); }

        const mergedUser = UserController.userRepository?.merge(user, req.body);
        await UserController.userRepository!.save(mergedUser);
        return res.json(mergedUser);
    };
    static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await UserController.userRepository!.findOne(id);
        if (user === undefined) {
            throw new Error('User not found');
        }
        
        await UserController.userRepository!.remove(user);

        return res.json({
            status : 'success'
        });
    };

}

export {UserController};
  