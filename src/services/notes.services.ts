import { Notes } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';

class NotesServices {
    async createNewNotesService(
        noteData: INoteRequestData,
    ): Promise<INoteRequestData | undefined | null> {
        /**
         * Create a new note
         * @param {INoteRequestData} noteData - The data for the new note
         * @returns {Promise<INoteRequestData | undefined | null >}
         */
        return await Notes.create(noteData);
    }
}

const notesServices = new NotesServices();
export default notesServices;
