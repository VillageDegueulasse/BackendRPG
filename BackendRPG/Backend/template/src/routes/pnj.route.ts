import { Router } from 'express';
import { PnjController } from '../controllers/pnj.controller';
import { PnjValidator } from '../validators/pnj.validator';

const pnjRouter = Router();

pnjRouter.get('/api/v1/pnj', PnjController.getAll);
pnjRouter.get('/api/v1/pnj/:id', PnjController.getById);
pnjRouter.post('/api/v1/pnj', PnjValidator.getRules(), PnjValidator.validate, PnjController.create);
pnjRouter.put('/api/v1/pnj/:id', PnjValidator.getRules(), PnjValidator.validate, PnjController.update);
pnjRouter.delete('/api/v1/pnj/:id', PnjController.delete);

export { pnjRouter };