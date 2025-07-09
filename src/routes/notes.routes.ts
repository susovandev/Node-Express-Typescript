import notesController from '@/controllers/notes.controller.js';
import { Router } from 'express';

const notesRouter: Router = Router();

notesRouter.post('/', notesController.createNewNotes);
notesRouter.get('/', notesController.getAllNotes);
export default notesRouter;
