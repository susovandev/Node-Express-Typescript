import notesController from '@/controllers/notes.controller.js';
import { Router } from 'express';

const notesRouter: Router = Router();

notesRouter.post('/', notesController.createNewNotes);
export default notesRouter;
