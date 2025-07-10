/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@/utils/error.js';
import { StatusCodes } from 'http-status-codes';

export const globalErrorMiddleware = (
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
            status: err.status,
            StatusCode: err.statusCode,
            message: err.message,
        });
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        StatusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Something went wrong',
    });
};
