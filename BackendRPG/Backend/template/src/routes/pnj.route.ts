import { Router } from 'express';
import { PnjController } from '../controllers/pnj.controller';

const pnjRouter = Router();

pnjRouter.get('/api/v1/pnj', PnjController.getAll);
pnjRouter.get('/api/v1/pnj/:id', PnjController.getById);
pnjRouter.post('/api/v1/pnj', PnjController.create);
pnjRouter.put('/api/v1/pnj/:id', PnjController.update);
pnjRouter.delete('/api/v1/pnj/:id', PnjController.delete);

export { pnjRouter };