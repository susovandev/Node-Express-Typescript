import { NoteDAO } from '@/dao/notes.dao.js';
import { INoteSchema } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';
import { BadRequestException, NotFoundException } from '@/utils/error.js';
import { isValidMongoObjectId } from '@/utils/isValidObjectId.js';
import { ObjectId } from 'mongoose';

class NotesServices {
    constructor(private readonly notesDao: NoteDAO) {}
    async createNewNotesService(
        requestData: INoteRequestData,
    ): Promise<INoteSchema> {
        // create a new note
        const note = this.notesDao.create(requestData);

        // check if note is null or undefined
        if (!note) {
            throw new BadRequestException('Note could not be created');
        }

        return note;
    }

    async getAllNotesService(): Promise<INoteSchema[] | null> {
        // get all notes
        const notes = this.notesDao.getAll();

        // check if notes is null or undefined
        if (!notes) {
            throw new NotFoundException('Notes could not be fetched');
        }

        return notes;
    }

    async getNoteByIdService(
        id: ObjectId | string,
    ): Promise<INoteSchema | null> {
        // check if id is null or undefined
        if (!id) {
            throw new BadRequestException('Note id is required');
        }

        // check if id is valid
        if (!isValidMongoObjectId(id)) {
            throw new BadRequestException('Note id is invalid');
        }

        // get note by id
        const note = this.notesDao.getById(id);

        // check if note is null or undefined
        if (!note) {
            throw new NotFoundException('Note not found');
        }

        return note;
    }

    async updateNoteByIdService(
        id: string | ObjectId,
        requestData: Partial<INoteRequestData>,
    ): Promise<INoteSchema | null> {
        // check if id is null or undefined
        if (!id) {
            throw new BadRequestException('Note id is required');
        }

        // check if id is valid
        if (!isValidMongoObjectId(id)) {
            throw new BadRequestException('Note id is invalid');
        }

        // update note
        const note = this.notesDao.updateById(id, requestData);

        // check if note is null or undefined
        if (!note) {
            throw new NotFoundException('Note could not be updated');
        }

        return note;
    }

    async deleteNoteByIdService(id: ObjectId | string): Promise<boolean> {
        // check if id is null or undefined
        if (!id) {
            throw new BadRequestException('Note id is required');
        }

        // check if id is valid
        if (!isValidMongoObjectId(id)) {
            throw new BadRequestException('Note id is invalid');
        }

        // delete note
        const note = this.notesDao.deleteById(id);

        // if note is null or undefined
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return true;
    }
}

export default new NotesServices(new NoteDAO());
