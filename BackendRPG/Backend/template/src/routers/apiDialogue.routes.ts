import { Router } from 'express';
import { DialogueController } from '../controllers/dialogue.controller';
import { catchErrors } from '../middlewares/Errors';
import { DialogueValidator } from '../validators/dialogue.validator';

const dialogueRouter = Router();

dialogueRouter.get('/api/v1/dialogue', catchErrors(DialogueController.getAll));
dialogueRouter.get('/api/v1/dialogue/:id', catchErrors(DialogueController.getById));
dialogueRouter.post('/api/v1/dialogue', DialogueValidator.getRules(), DialogueValidator.validate, catchErrors(DialogueController.create));
dialogueRouter.put('/api/v1/dialogue/:id', DialogueValidator.getRules(), DialogueValidator.validate, catchErrors(DialogueController.update));
dialogueRouter.delete('/api/v1/dialogue/:id', DialogueValidator.getRules(), DialogueValidator.validate, catchErrors(DialogueController.delete));

export { dialogueRouter };