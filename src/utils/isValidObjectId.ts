import { isValidObjectId, ObjectId } from 'mongoose';

export const isValidMongoObjectId = (mongoId: string | ObjectId): boolean => {
    return isValidObjectId(mongoId);
};
