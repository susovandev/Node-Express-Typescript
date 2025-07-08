import { Application } from 'express';
import notesRoutes from './notes.routes.js';
const appRouter = (app: Application) => {
    app.use('/api/v1/notes', notesRoutes);
};

export default appRouter;
