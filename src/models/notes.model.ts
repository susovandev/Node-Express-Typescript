import { model, Schema, Document } from 'mongoose';

export interface INoteSchema extends Document {
    readonly title: string;
    readonly content: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

const notesSchema: Schema<INoteSchema> = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            minlength: [1, 'Title must be at least 1 character long'],
            maxlength: [100, 'Title cannot exceed 100 characters'],
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
            trim: true,
            minlength: [1, 'Content must be at least 1 character long'],
            maxlength: [1000, 'Content cannot exceed 1000 characters'],
        },
    },
    { timestamps: true },
);

export const Notes = model<INoteSchema>('Notes', notesSchema);
