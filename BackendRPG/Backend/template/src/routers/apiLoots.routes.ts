import { Router } from 'express';
import { LootController } from '../controllers/loots.controller';



import { catchErrors } from '../middlewares/Errors';
import { LootsValidator } from '../validators/loots.validator';

const apiLootRouter = Router();

<<<<<<< HEAD
apiLootRouter.post('/api/v1/createLoot', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.create));
apiLootRouter.get('/api/v1/allLoot', catchErrors(LootController.findAll));
apiLootRouter.put('/api/v1/updateLoots/:id', catchErrors(LootController.update));
apiLootRouter.get('/api/v1/deleteLoots/:id', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.delete));
apiLootRouter.get('/api/v1/lootById/:id', LootsValidator.getRules(), LootsValidator.validate, catchErrors(LootController.findById));
=======
apiLootRouter.post('/api/v1/createLoot', catchErrors(LootController.create));
apiLootRouter.get('/api/v1/Loots', catchErrors(LootController.findAll));
apiLootRouter.put('/api/v1/updateLoots/:id', catchErrors(LootController.update));
apiLootRouter.get('/api/v1/deleteLoots/:id', catchErrors(LootController.delete));
apiLootRouter.get('/api/v1/lootById/:id', catchErrors(LootController.findById));
//TEST
// apiLootRouter.get('/api/v1/test/:id', catchErrors(LootController.findLootByMonsterId));
>>>>>>> d4caeaa8dc7c402fc97c7841d0157762b92f8b2f



export {apiLootRouter};