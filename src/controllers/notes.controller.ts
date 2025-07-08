import notesServices from '@/services/notes.services.js';
import { INoteRequestData } from '@/types/notes.types.js';
import { Request, Response, NextFunction } from 'express';

class NotesController {
    async createNewNotes(
        req: Request<unknown, unknown, INoteRequestData>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            /**
             * Create a new note
             * @param {INoteRequestData} req.body - The data for the new note
             */

            const notes = await notesServices.createNewNotesService(req.body);

            // check if notes is null or undefined
            if (!notes) {
                res.status(400).json({
                    status: 'fail',
                    message: 'Note creation failed',
                });
            }

            // send the success response
            res.status(201).json({
                status: 'success',
                message: 'Note created successfully',
                data: notes,
            });
        } catch (error) {
            next(error);
        }
    }
}

const notesController = new NotesController();
export default notesController;
