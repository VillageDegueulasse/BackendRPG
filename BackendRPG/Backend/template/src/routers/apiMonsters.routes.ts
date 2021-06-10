import { Router } from 'express';

import { MonstersController } from '../controllers/monsters.controller';



import { catchErrors } from '../middlewares/Errors';
import { MonstersValidator } from '../validators/monsters.validators';

const apiMonsterRouter = Router();

apiMonsterRouter.post('/api/v1/createMonster', MonstersValidator.getRules(), MonstersValidator.validate, catchErrors(MonstersController.create));
apiMonsterRouter.get('/api/v1/allMonster', catchErrors(MonstersController.findAll));
apiMonsterRouter.put('/api/v1/updateMonsters/:id', catchErrors(MonstersController.update));
apiMonsterRouter.get('/api/v1/deleteMonsters/:id', MonstersValidator.getRules(), MonstersValidator.validate, catchErrors(MonstersController.delete));
apiMonsterRouter.get('/api/v1/MonsterById/:id', MonstersValidator.getRules(), MonstersValidator.validate, catchErrors(MonstersController.findById));
export {apiMonsterRouter};