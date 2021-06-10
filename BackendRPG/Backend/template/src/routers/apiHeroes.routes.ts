import { Router } from 'express';
import { HeroesController } from '../controllers/heroes.controller';


import { catchErrors } from '../middlewares/Errors';

const apiHeroesRouter = Router();

apiHeroesRouter.post('/api/v1/createHeroes', catchErrors(HeroesController.create));
apiHeroesRouter.get('/api/v1/heroesbyuser/:id', catchErrors(HeroesController.findHeroeByUserId));
apiHeroesRouter.patch('/api/v1/updateHeroes/:id', catchErrors(HeroesController.update));
apiHeroesRouter.delete('/api/v1/deleteHeroes/:id', catchErrors(HeroesController.delete));
apiHeroesRouter.get('/api/v1/inventaireByheroesId/:id', catchErrors(HeroesController.findInventaireByHeroesId));



export {apiHeroesRouter};