import { INoteSchema } from '@/models/notes.model.js';
import notesServices from '@/services/notes.services.js';
import ApiResponse from '@/utils/apiResponse.js';
import { isValidMongoObjectId } from '@/utils/isValidObjectId.js';
import Logger from '@/utils/logger.js';
import { Request, Response, NextFunction } from 'express';

class NotesController {
    createNewNotes = async (
        req: Request<unknown, unknown, INoteSchema>,
        res: Response<ApiResponse<INoteSchema>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info(
                'Creating a new note with data:',
                JSON.stringify(req.body),
            );

            // create a new note in the database
            const notes = await notesServices.createNewNotesService(req.body);

            // check if notes is null or undefined
            if (!notes) {
                res.status(400).json(
                    new ApiResponse(400, 'Note could not be created'),
                );
            }

            // send the success response with the created note
            res.status(201).json(new ApiResponse(201, 'Note created', notes));
        } catch (error) {
            next(error);
        }
    };

    getAllNotes = async (
        _: Request,
        res: Response<ApiResponse<INoteSchema[] | null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info('Fetching all notes');

            // fetch all notes from the database
            const notes = await notesServices.getAllNotesService();

            // check if notes is null or undefined
            if (!notes) {
                res.status(400).json(
                    new ApiResponse(400, 'Notes could not be fetched'),
                );
            }

            // send the success response with the created note
            res.status(200).json(new ApiResponse(200, 'Notes fetched', notes));
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
            Logger.info('Fetching note with id:', req.params.id);
            const { id } = req.params;

            // check if id is null or undefined
            if (!id) {
                res.status(400).json(
                    new ApiResponse(400, 'Note id is required'),
                );
            }

            // check if id is valid
            if (!isValidMongoObjectId(id)) {
                res.status(400).json(new ApiResponse(400, 'Invalid Note id'));
            }

            // fetch note from the database
            const note = await notesServices.getNoteByIdService(id);

            // check if note is null or undefined
            if (!note) {
                res.status(404).json(new ApiResponse(404, 'Note not found'));
            }

            // send the success response
            res.status(200).json(
                new ApiResponse(200, 'Note fetched successfully', note),
            );
        } catch (error) {
            next(error);
        }
    };

    deleteNoteById = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<null>>,
        next: NextFunction,
    ) => {
        try {
            Logger.info('Deleting note with id:', req.params.id as string);
            const { id } = req.params;

            // check if id is null or undefined
            if (!id) {
                res.status(400).json(
                    new ApiResponse(400, 'Note id is required'),
                );
            }

            // check if id is valid
            if (!isValidMongoObjectId(id)) {
                res.status(400).json(new ApiResponse(400, 'Invalid Note id'));
            }

            // delete note from the database
            const note = await notesServices.deleteNoteByIdService(id);

            // if note is null or undefined
            if (!note) {
                res.status(404).json(new ApiResponse(404, 'Note not found'));
            }

            // send the success response
            res.status(200).json(new ApiResponse(200, 'Note deleted'));
        } catch (error) {
            next(error);
        }
    };
}

export default new NotesController();
