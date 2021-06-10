import { Router } from 'express';
import { DialogueController } from '../controllers/dialogue.controller';


const dialogueRouter = Router();

dialogueRouter.get('/api/v1/dialogue', DialogueController.getAll);
dialogueRouter.get('/api/v1/dialogue/:id', DialogueController.getById);
dialogueRouter.post('/api/v1/dialogue', DialogueController.create);
dialogueRouter.put('/api/v1/dialogue/:id', DialogueController.update);
dialogueRouter.delete('/api/v1/dialogue/:id', DialogueController.delete);

export { dialogueRouter };