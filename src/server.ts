import express from 'express';

const server = class Server {
    public app: express.Application;

    constructor(private port: number) {
        this.app = express();
    }

    // Start the Express server at specified port
    public start() {
        const callback = console.log(`Server listening at localhost:${this.port}`);
        this.app.listen(this.port, () => callback);
    }
};

export default server;
