import { Router } from 'express';

import { MonstersController } from '../controllers/monsters.controller';



import { catchErrors } from '../middlewares/Errors';

const apiMonsterRouter = Router();

apiMonsterRouter.post('/api/v1/createMonster', catchErrors(MonstersController.create));
apiMonsterRouter.get('/api/v1/Monsters', catchErrors(MonstersController.findAll));
apiMonsterRouter.put('/api/v1/updateMonsters/:id', catchErrors(MonstersController.update));
apiMonsterRouter.delete('/api/v1/deleteMonsters/:id', catchErrors(MonstersController.delete));
apiMonsterRouter.get('/api/v1/MonsterById/:id', catchErrors(MonstersController.findById));

export {apiMonsterRouter};