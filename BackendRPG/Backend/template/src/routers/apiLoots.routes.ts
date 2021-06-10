import { Router } from 'express';
import { LootController } from '../controllers/loots.controller';
import { catchErrors } from '../middlewares/Errors';
import { LootsValidator } from '../validators/loots.validator';

const apiLootRouter = Router();

apiLootRouter.post('/api/v1/createLoot', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.create));
apiLootRouter.get('/api/v1/allLoot', catchErrors(LootController.findAll));
apiLootRouter.put('/api/v1/updateLoots/:id', catchErrors(LootController.update));
apiLootRouter.delete('/api/v1/deleteLoots/:id', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.delete));
apiLootRouter.get('/api/v1/lootById/:id', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.findById));



export {apiLootRouter};