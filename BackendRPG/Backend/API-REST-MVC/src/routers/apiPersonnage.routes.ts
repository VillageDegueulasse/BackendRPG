import { Router } from 'express';
import { PersonnageController } from '../controllers/personnage.controller';

import { catchErrors } from '../middlewares/Errors';

const apiPersonnageRouter = Router();

apiPersonnageRouter.post('/api/v1/createPersonnage', catchErrors(PersonnageController.create));
apiPersonnageRouter.get('/api/v1/personnage', catchErrors(PersonnageController.findAll));
apiPersonnageRouter.get('/api/v1/personnageByid/:id', catchErrors(PersonnageController.findById));
apiPersonnageRouter.delete('/api/v1/deletePersonnage/:id', catchErrors(PersonnageController.delete));
apiPersonnageRouter.put('/api/v1/updatePersonnage/:id', catchErrors(PersonnageController.update));


export {apiPersonnageRouter};