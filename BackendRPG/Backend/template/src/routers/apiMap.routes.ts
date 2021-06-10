import { Router } from 'express';
import { MapController } from '../controllers/map.controller';


import { catchErrors } from '../middlewares/Errors';

const apiMapRouter = Router();

apiMapRouter.post('/api/v1/createMap', catchErrors(MapController.create));
apiMapRouter.get('/api/v1/mapbyid/:id', catchErrors(MapController.findById));
apiMapRouter.put('/api/v1/updateMap/:id', catchErrors(MapController.update));
apiMapRouter.get('/api/v1/deleteMap/:id', catchErrors(MapController.delete));


export {apiMapRouter};