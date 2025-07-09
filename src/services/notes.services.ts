import { INoteSchema, Notes } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';
import { ObjectId } from 'mongoose';

class NotesServices {
    async createNewNotesService(
        noteData: INoteRequestData,
    ): Promise<INoteSchema> {
        return await Notes.create(noteData);
    }

    async getAllNotesService(): Promise<INoteSchema[] | null> {
        const notes = await Notes.find().sort({ createdAt: -1 });
        return notes;
    }

    async getNoteByIdService(
        noteId: ObjectId | string,
    ): Promise<INoteSchema | null> {
        return await Notes.findById({ _id: noteId });
    }
}

export default new NotesServices();
