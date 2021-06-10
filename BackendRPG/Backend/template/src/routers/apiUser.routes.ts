import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { catchErrors } from '../middlewares/Errors';
import { UserValidator } from '../validators/user.validator';

const apiUserRouter = Router();

apiUserRouter.post('/api/v1/registerUser', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.create));
apiUserRouter.get('/api/v1/user', catchErrors(UserController.findAll));
<<<<<<< HEAD
apiUserRouter.get('/api/v1/user/:id', catchErrors(UserController.findById));
apiUserRouter.delete('/api/v1/deleteUser/:id', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.delete));
apiUserRouter.put('/api/v1/updateUser/:id', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.update));
=======
apiUserRouter.get('/api/v1/userbyId/:id', catchErrors(UserController.findById));
apiUserRouter.delete('/api/v1/deleteUser/:id', catchErrors(UserController.delete));
apiUserRouter.put('/api/v1/updateUser/:id', catchErrors(UserController.update));
>>>>>>> d4caeaa8dc7c402fc97c7841d0157762b92f8b2f


export {apiUserRouter};