import Joi from 'joi';

export const noteCreateSchema = Joi.object({
    title: Joi.string().required().min(3).max(100).trim(),
    content: Joi.string().required().min(5).max(500).trim(),
});

export const noteUpdateSchema = Joi.object({
    title: Joi.string().min(3).max(100).trim(),
    content: Joi.string().min(5).max(500).trim(),
}).or('title', 'content');
