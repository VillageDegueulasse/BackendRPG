import { Router } from 'express';
import { PersonnageController } from '../controllers/personnage.controller';

import { catchErrors } from '../middlewares/Errors';
import { PersonnageValidator } from '../validators/personnage.validator';

const apiPersonnageRouter = Router();

apiPersonnageRouter.post('/api/v1/create', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.create));
apiPersonnageRouter.get('/api/v1/personnage', catchErrors(PersonnageController.findAll));
apiPersonnageRouter.get('/api/v1/personnage/:id', catchErrors(PersonnageController.findById));
apiPersonnageRouter.delete('/api/v1/deletePersonnage/:id', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.delete));
apiPersonnageRouter.put('/api/v1/updatePersonnage/:id', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.update));


export {apiPersonnageRouter};