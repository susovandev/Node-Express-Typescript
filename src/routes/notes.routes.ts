import notesController from '@/controllers/notes.controller.js';
import { Router } from 'express';

const notesRouter: Router = Router();

notesRouter.post('/', notesController.createNewNotes);
notesRouter.get('/', notesController.getAllNotes);
notesRouter.get('/:id', notesController.getNoteById);
export default notesRouter;
