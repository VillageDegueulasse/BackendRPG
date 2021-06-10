import { Router } from 'express';
import { StuffController } from '../controllers/stuff.controller';


const stuffRouter = Router();

stuffRouter.get('/api/v1/stuff', StuffController.getAll);
stuffRouter.get('/api/v1/stuff/:id', StuffController.getById);
stuffRouter.post('/api/v1/stuff', StuffController.create);
stuffRouter.put('/api/v1/stuff/:id', StuffController.update);
stuffRouter.delete('/api/v1/stuff/:id', StuffController.delete);

export { stuffRouter };