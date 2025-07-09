import { INoteSchema, Notes } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';

class NotesServices {
    /**
     * Create a new note in the database
     * @param {INoteRequestData} noteData - The data for the new note
     * @returns {Promise<INoteRequestData | undefined | null >}
     */
    async createNewNotesService(
        noteData: INoteRequestData,
    ): Promise<INoteRequestData | undefined | null> {
        return await Notes.create(noteData);
    }

    /**
     * Get All Latest Notes from the database
     * @returns {Promise<INoteSchema[]>}
     */
    async getAllNotesService(): Promise<INoteSchema[]> {
        const notes = await Notes.find().sort({ createdAt: -1 });
        return notes;
    }
}

const notesServices = new NotesServices();
export default notesServices;
