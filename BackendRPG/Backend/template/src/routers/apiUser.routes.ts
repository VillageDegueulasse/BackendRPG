import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { catchErrors } from '../middlewares/Errors';

const apiUserRouter = Router();

apiUserRouter.post('/api/v1/registerUser', catchErrors(UserController.create));
apiUserRouter.get('/api/v1/user', catchErrors(UserController.findAll));
apiUserRouter.get('/api/v1/user/:id', catchErrors(UserController.findById));
apiUserRouter.delete('/api/v1/deleteUser/:id', catchErrors(UserController.delete));
apiUserRouter.put('/api/v1/updateUser/:id', catchErrors(UserController.update));


export {apiUserRouter};