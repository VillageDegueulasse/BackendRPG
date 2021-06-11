import { Router } from 'express';
import { InventaireController } from '../controllers/inventaire.controller';
import { catchErrors } from '../middlewares/Errors';
import { InventaireValidator } from '../validators/inventaire.validator';

const inventaireRouter = Router();

inventaireRouter.get('/api/v1/inventaire', catchErrors(InventaireController.getAll));
inventaireRouter.get('/api/v1/inventaire/:id', catchErrors(InventaireController.getById));
// inventaireRouter.post('/api/v1/inventaire', InventaireValidator.getRules(), InventaireValidator.validate, catchErrors(InventaireController.create));
inventaireRouter.put('/api/v1/inventaire/:id', InventaireValidator.getRules(), InventaireValidator.validate, catchErrors(InventaireController.update));
inventaireRouter.delete('/api/v1/inventaire/:id', InventaireValidator.getRules(), InventaireValidator.validate, catchErrors(InventaireController.delete));

export { inventaireRouter };