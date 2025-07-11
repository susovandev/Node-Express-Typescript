import notesController from '@/controllers/notes.controller.js';
import schemaValidator from '@/middlewares/validation.middleware.js';
import {
    noteCreateSchema,
    noteUpdateSchema,
} from '@/validations/notes.validationSchema.js';
import { Router } from 'express';

const notesRouter: Router = Router();

notesRouter
    .route('/')
    .post(schemaValidator(noteCreateSchema), notesController.createNewNotes)
    .get(notesController.getAllNotes);

notesRouter
    .route('/:id')
    .get(notesController.getNoteById)
    .put(schemaValidator(noteUpdateSchema), notesController.updateNoteById)
    .delete(notesController.deleteNoteById);
export default notesRouter;
