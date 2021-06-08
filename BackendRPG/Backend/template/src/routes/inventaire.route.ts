import { Router } from 'express';
import { InventaireController } from '../controllers/inventaire.controller';
import { InventaireValidator } from '../validators/inventaire.validator';

const inventaireRouter = Router();

inventaireRouter.get('/api/v1/inventaire', InventaireController.getAll);
inventaireRouter.get('/api/v1/inventaire/:id', InventaireController.getById);
inventaireRouter.post('/api/v1/inventaire', InventaireValidator.getRules(), InventaireValidator.validate, InventaireController.create);
inventaireRouter.put('/api/v1/inventaire/:id', InventaireValidator.getRules(), InventaireValidator.validate, InventaireController.update);
inventaireRouter.delete('/api/v1/inventaire/:id', InventaireController.delete);

export { inventaireRouter };