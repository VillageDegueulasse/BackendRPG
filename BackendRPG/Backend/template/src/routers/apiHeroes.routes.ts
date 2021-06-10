import { Router } from 'express';
import { HeroesController } from '../controllers/heroes.controller';


import { catchErrors } from '../middlewares/Errors';
import { HeroesValidator } from '../validators/heroes.validator';

const apiHeroesRouter = Router();

apiHeroesRouter.post('/api/v1/createHeroes', HeroesValidator.getRules(), HeroesValidator.validate, catchErrors(HeroesController.create));
apiHeroesRouter.get('/api/v1/heroesbyuser/:id', catchErrors(HeroesController.findHeroeByUserId));
apiHeroesRouter.put('/api/v1/updateHeroes/:id', HeroesValidator.getRules(), HeroesValidator.validate, catchErrors(HeroesController.update));
apiHeroesRouter.get('/api/v1/deleteHeroes/:id', HeroesValidator.getRules(), HeroesValidator.validate, catchErrors(HeroesController.delete));
apiHeroesRouter.get('/api/v1/inventaireByheroesId/:id', catchErrors(HeroesController.findInventaireByHeroesId));



export {apiHeroesRouter};