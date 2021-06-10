import { Router } from 'express';
import { InventaireController } from '../controllers/inventaire.controller';


const inventaireRouter = Router();

inventaireRouter.get('/api/v1/inventaire', InventaireController.getAll);
inventaireRouter.get('/api/v1/inventaire/:id', InventaireController.getById);
// inventaireRouter.post('/api/v1/inventaire', InventaireController.create);
inventaireRouter.put('/api/v1/inventaire/:id', InventaireController.update);
inventaireRouter.delete('/api/v1/inventaire/:id', InventaireController.delete);

export { inventaireRouter };