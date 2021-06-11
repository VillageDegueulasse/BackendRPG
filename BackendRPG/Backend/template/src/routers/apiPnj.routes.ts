import { Router } from 'express';
import { PnjController } from '../controllers/pnj.controller';
import { catchErrors } from '../middlewares/Errors';
import { PnjValidator } from '../validators/pnj.validator';

const pnjRouter = Router();

pnjRouter.get('/api/v1/pnj', PnjValidator.getRules(), PnjValidator.validate, catchErrors(PnjController.getAll));
pnjRouter.get('/api/v1/pnj/:id', PnjValidator.getRules(), PnjValidator.validate, catchErrors(PnjController.getById));
pnjRouter.post('/api/v1/pnj', PnjValidator.getRules(), PnjValidator.validate, catchErrors(PnjController.create));
pnjRouter.put('/api/v1/pnj/:id', PnjValidator.getRules(), PnjValidator.validate, catchErrors(PnjController.update));
pnjRouter.delete('/api/v1/pnj/:id', PnjValidator.getRules(), PnjValidator.validate, catchErrors(PnjController.delete));

export { pnjRouter };