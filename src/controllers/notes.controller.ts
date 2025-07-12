import { INoteSchema } from '@/models/notes.model.js';
import notesServices from '@/services/notes.services.js';
import ApiResponse from '@/utils/apiResponse.js';
import Logger from '@/utils/logger.js';
import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongoose';

class NotesController {
    createNewNotes = async (
        req: Request<unknown, unknown, INoteSchema>,
        res: Response<ApiResponse<INoteSchema>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(
                `Creating a new note with data
                ${JSON.stringify(req.body)}`,
            );

            // create a new note in the database
            const notes = await notesServices.createNewNotesService(req.body);

            // send the success response with the created note
            res.status(201).json(new ApiResponse(201, 'Note created', notes));
        } catch (error) {
            next(error);
        }
    };

    getAllNotes = async (
        _req: Request,
        res: Response<ApiResponse<INoteSchema[] | null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(`Fetching all notes`);

            // fetch all notes from the database
            const notes = await notesServices.getAllNotesService();

            // send the success response with the created note
            res.status(200).json(
                new ApiResponse(
                    200,
                    'Successfully retrieved list of notes',
                    notes,
                ),
            );
        } catch (error) {
            next(error);
        }
    };

    updateNoteById = async (
        req: Request<{ id: string | ObjectId }, unknown, INoteSchema>,
        res: Response<ApiResponse<INoteSchema | null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(
                `Updating note with id:
                ${req.params.id}
                with data:
                ${JSON.stringify(req.body)}`,
            );

            // update note in the database
            const note = await notesServices.updateNoteByIdService(
                req.params.id,
                req.body,
            );

            // send the success response with the updated note
            res.status(200).json(new ApiResponse(200, 'Note updated', note));
        } catch (error) {
            next(error);
        }
    };
    getNoteById = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<INoteSchema | null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(`Fetching note with id: ${req.params.id}`);

            // fetch note from the database
            const note = await notesServices.getNoteByIdService(req.params.id);

            // send the success response
            res.status(200).json(
                new ApiResponse(200, 'Note fetched successfully', note),
            );
        } catch (error) {
            console.log('error in controller', error);
            next(error);
        }
    };

    deleteNoteById = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(`Deleting note with id: ${req.params.id}`);

            // delete note from the database
            await notesServices.deleteNoteByIdService(req.params.id);

            // send the success response
            res.status(200).json(new ApiResponse(200, 'Note deleted'));
        } catch (error) {
            next(error);
        }
    };
}

export default new NotesController();
