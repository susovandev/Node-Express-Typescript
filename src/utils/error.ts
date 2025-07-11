import { StatusCodes } from 'http-status-codes';
export abstract class CustomError extends Error {
    abstract status: boolean;
    abstract statusCode: number;
    constructor(message: string) {
        super(message);
    }
}

export class BadRequestException extends CustomError {
    status = false;
    statusCode = StatusCodes.BAD_REQUEST;
    constructor(message: string) {
        super(message);
    }
}

export class NotFoundException extends CustomError {
    status = false;
    statusCode = StatusCodes.NOT_FOUND;
    constructor(message: string) {
        super(message);
    }
}

export class UnauthorizedException extends CustomError {
    status = false;
    statusCode = StatusCodes.UNAUTHORIZED;
    constructor(message: string) {
        super(message);
    }
}

export class ForbiddenException extends CustomError {
    status = false;
    statusCode = StatusCodes.FORBIDDEN;
    constructor(message: string) {
        super(message);
    }
}

export class InternalServerException extends CustomError {
    status = false;
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    constructor(message: string) {
        super(message);
    }
}
