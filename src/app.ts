import express from 'express';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }

    start() {
        this.appListen();
    }

    private appListen() {
        this.app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    }
}
