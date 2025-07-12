import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import notesRoutes from './notes.routes.js';
import swaggerSpec from '@/docs/index.js';

const appRouter = (app: Application) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use('/api/v1/notes', notesRoutes);
};

export default appRouter;
