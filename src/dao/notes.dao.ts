import { INoteSchema, Notes } from '@/models/notes.model.js';
import { INoteRequestData } from '@/types/notes.types.js';
import { ObjectId } from 'mongoose';

export class NoteDAO {
    async create(data: INoteRequestData): Promise<INoteSchema> {
        const { title, content } = data;
        return await Notes.create({ title: title, content: content });
    }
    async getAll(): Promise<INoteSchema[] | null> {
        return await Notes.find({}).sort({ createdAt: -1 });
    }
    async getById(id: ObjectId | string) {
        return await Notes.findById(id);
    }
    async updateById(id: ObjectId | string, data: Partial<INoteRequestData>) {
        const { title, content } = data;
        return await Notes.findOneAndUpdate(
            { _id: id },
            { $set: { title, content } },
            { new: true },
        );
    }
    async deleteById(id: ObjectId | string) {
        return await Notes.findByIdAndDelete(id);
    }
}
