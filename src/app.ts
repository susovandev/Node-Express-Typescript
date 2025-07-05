import express from 'express';
import config from '@/config/_config.js';
import connectioDB from '@/db/db.js';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    async start() {
        await this.databaseConnection();
        this.appListen();
    }

    private async databaseConnection() {
        await connectioDB();
    }
    private appListen() {
        this.app.listen(config.port, () => {
            console.log(
                `Server is running on http://localhost:${config.port} in ${config.node_env} mode`,
            );
        });
    }
}
