import express from 'express';
import config from '@/config/_config.js';
import connectioDB from '@/db/db.js';
import Logger from './utils/logger.js';
import morganMiddleware from './config/morganMiddleware.js';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    async start() {
        await this.databaseConnection();
        this.setupMiddleware();
        this.appRoutes();
        this.appListen();
    }

    private async databaseConnection() {
        await connectioDB();
    }

    private setupMiddleware() {
        this.app.use(morganMiddleware);
    }
    private appRoutes() {
        this.app.get('/logger', (_, res) => {
            Logger.error('This is an error log');
            Logger.warn('This is a warn log');
            Logger.info('This is a info log');
            Logger.http('This is a http log');
            Logger.debug('This is a debug log');

            res.send('Logger messages have been logged.');
        });
    }
    private appListen() {
        this.app.listen(config.port, () => {
            Logger.info(
                `Server is running on http://localhost:${config.port} in ${config.node_env} mode`,
            );
        });
    }
}
