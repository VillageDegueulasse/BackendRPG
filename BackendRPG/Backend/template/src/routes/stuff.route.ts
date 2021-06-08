import { Router } from 'express';
import { StuffController } from '../controllers/stuff.controller';
import { StuffValidator } from '../validators/stuff.validator';

const stuffRouter = Router();

stuffRouter.get('/api/v1/stuff', StuffController.getAll);
stuffRouter.get('/api/v1/stuff/:id', StuffController.getById);
stuffRouter.post('/api/v1/stuff', StuffValidator.getRules(), StuffValidator.validate, StuffController.create);
stuffRouter.put('/api/v1/stuff/:id', StuffValidator.getRules(), StuffValidator.validate, StuffController.update);
stuffRouter.delete('/api/v1/stuff/:id', StuffController.delete);

export { stuffRouter };