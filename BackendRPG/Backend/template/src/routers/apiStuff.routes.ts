import { Router } from 'express';
import { StuffController } from '../controllers/stuff.controller';
import { catchErrors } from '../middlewares/Errors';
import { StuffValidator } from '../validators/stuff.validator';

const stuffRouter = Router();

stuffRouter.get('/api/v1/stuff', StuffValidator.getRules(), StuffValidator.validate, catchErrors(StuffController.getAll));
stuffRouter.get('/api/v1/stuff/:id', StuffValidator.getRules(), StuffValidator.validate, catchErrors(StuffController.getById));
stuffRouter.post('/api/v1/stuff', StuffValidator.getRules(), StuffValidator.validate, catchErrors(StuffController.create));
stuffRouter.put('/api/v1/stuff/:id', StuffValidator.getRules(), StuffValidator.validate, catchErrors(StuffController.update));
stuffRouter.delete('/api/v1/stuff/:id', StuffValidator.getRules(), StuffValidator.validate, catchErrors(StuffController.delete));

export { stuffRouter };