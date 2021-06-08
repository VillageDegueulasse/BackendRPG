import { Router } from 'express';
import { DialogueController } from '../controllers/dialogue.controller';
import { DialogueValidator } from '../validators/dialogue.validator';

const dialogueRouter = Router();

dialogueRouter.get('/api/v1/dialogue', DialogueController.getAll);
dialogueRouter.get('/api/v1/dialogue/:id', DialogueController.getById);
dialogueRouter.post('/api/v1/dialogue', DialogueValidator.getRules(), DialogueValidator.validate, DialogueController.create);
dialogueRouter.put('/api/v1/dialogue/:id', DialogueValidator.getRules(), DialogueValidator.validate, DialogueController.update);
dialogueRouter.delete('/api/v1/dialogue/:id', DialogueController.delete);

export { dialogueRouter };