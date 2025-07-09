import notesController from '@/controllers/notes.controller.js';
import { Router } from 'express';

const notesRouter: Router = Router();

notesRouter
    .route('/')
    .post(notesController.createNewNotes)
    .get(notesController.getAllNotes);

notesRouter
    .route('/:id')
    .get(notesController.getNoteById)
    .delete(notesController.deleteNoteById);
export default notesRouter;
