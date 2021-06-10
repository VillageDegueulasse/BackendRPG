import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { catchErrors } from '../middlewares/Errors';
import { UserValidator } from '../validators/user.validator';

const apiUserRouter = Router();

apiUserRouter.post('/api/v1/registerUser', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.create));
apiUserRouter.get('/api/v1/user', catchErrors(UserController.findAll));
apiUserRouter.get('/api/v1/user/:id', catchErrors(UserController.findById));
apiUserRouter.delete('/api/v1/deleteUser/:id', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.delete));
apiUserRouter.put('/api/v1/updateUser/:id', UserValidator.getRules(), UserValidator.validate, catchErrors(UserController.update));


export {apiUserRouter};