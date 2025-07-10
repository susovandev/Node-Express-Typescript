import { INoteSchema, Notes } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';
import { BadRequestException, NotFoundException } from '@/utils/error.js';
import { isValidMongoObjectId } from '@/utils/isValidObjectId.js';
import { ObjectId } from 'mongoose';

class NotesServices {
    async createNewNotesService(
        requestData: INoteRequestData,
    ): Promise<INoteSchema> {
        const { title, content } = requestData;
        const note = await Notes.create({
            title,
            content,
        });
        // check if notes is null or undefined
        if (!note) {
            throw new BadRequestException('Note could not be created');
        }
        return note;
    }

    async getAllNotesService(): Promise<INoteSchema[] | null> {
        const notes = await Notes.find().sort({ createdAt: -1 });
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

        const note = await Notes.findById({ _id: id });
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
        const { title, content } = requestData;

        // check if id is null or undefined
        if (!id) {
            throw new BadRequestException('Note id is required');
        }

        // check if id is valid
        if (!isValidMongoObjectId(id)) {
            throw new BadRequestException('Note id is invalid');
        }
        const note = await Notes.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    title,
                    content,
                },
            },
            { new: true },
        );

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

        const note = await Notes.findByIdAndDelete({ _id: id });
        // if note is null or undefined
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return true;
    }
}

export default new NotesServices();
