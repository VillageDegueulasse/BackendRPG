import { Router } from 'express';
import { PersonnageController } from '../controllers/personnage.controller';

import { catchErrors } from '../middlewares/Errors';
import { PersonnageValidator } from '../validators/personnage.validator';

const apiPersonnageRouter = Router();

<<<<<<< HEAD
apiPersonnageRouter.post('/api/v1/create', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.create));
apiPersonnageRouter.get('/api/v1/personnage', catchErrors(PersonnageController.findAll));
apiPersonnageRouter.get('/api/v1/personnage/:id', catchErrors(PersonnageController.findById));
apiPersonnageRouter.delete('/api/v1/deletePersonnage/:id', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.delete));
apiPersonnageRouter.put('/api/v1/updatePersonnage/:id', PersonnageValidator.getRules(), PersonnageValidator.validate, catchErrors(PersonnageController.update));
=======
apiPersonnageRouter.post('/api/v1/createPersonnage', catchErrors(PersonnageController.create));
apiPersonnageRouter.get('/api/v1/personnage', catchErrors(PersonnageController.findAll));
apiPersonnageRouter.get('/api/v1/personnageByid/:id', catchErrors(PersonnageController.findById));
apiPersonnageRouter.delete('/api/v1/deletePersonnage/:id', catchErrors(PersonnageController.delete));
apiPersonnageRouter.put('/api/v1/updatePersonnage/:id', catchErrors(PersonnageController.update));
>>>>>>> d4caeaa8dc7c402fc97c7841d0157762b92f8b2f


export {apiPersonnageRouter};