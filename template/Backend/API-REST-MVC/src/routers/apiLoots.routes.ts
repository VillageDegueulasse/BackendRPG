import { Router } from 'express';
import { LootController } from '../controllers/loots.controller';



import { catchErrors } from '../middlewares/Errors';

const apiLootRouter = Router();

apiLootRouter.post('/api/v1/createLoot', catchErrors(LootController.create));
apiLootRouter.get('/api/v1/Loots', catchErrors(LootController.findAll));
apiLootRouter.put('/api/v1/updateLoots/:id', catchErrors(LootController.update));
apiLootRouter.get('/api/v1/deleteLoots/:id', catchErrors(LootController.delete));
apiLootRouter.get('/api/v1/lootById/:id', catchErrors(LootController.findById));
//TEST
// apiLootRouter.get('/api/v1/test/:id', catchErrors(LootController.findLootByMonsterId));



export {apiLootRouter};