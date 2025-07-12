import swaggerJsdoc from 'swagger-jsdoc';
import config from './_config.js';

export const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Notes API',
            version: '1.0.0',
            description: 'Notes API documentation',
        },
        tags: [
            {
                name: 'Notes',
                description: 'Notes API endpoints',
            },
        ],
        servers: [
            {
                url: config.baseUrl,
                description: 'Development server',
            },
        ],
    },
    apis: [
        './src/routes/**/*.ts',
        './docs/**/*.ts',
        './src/docs/components/schemas/*.ts',
    ],
    schemas: ['./src/docs/components/schemas/*.ts'],
};
