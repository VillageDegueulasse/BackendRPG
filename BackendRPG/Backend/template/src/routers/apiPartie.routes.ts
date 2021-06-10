import { Router } from 'express';
import { PartieController } from '../controllers/partie.controller';
import { catchErrors } from '../middlewares/Errors';



const apiPartieRouter = Router();

apiPartieRouter.get('/api/v1/partie', catchErrors(PartieController.findAll));
apiPartieRouter.get('/api/v1/partiebyid/:id', catchErrors(PartieController.findById));
apiPartieRouter.post('/api/v1/createPartie', catchErrors( PartieController.create));
apiPartieRouter.put('/api/v1/updatePartie/:id', catchErrors(PartieController.update));
apiPartieRouter.delete('/api/v1/deletePartie/:id', catchErrors(PartieController.delete));

export { apiPartieRouter };