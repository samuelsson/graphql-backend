import express from 'express';

const server = class Server {
    public app: express.Application;

    constructor(private port: number) {
        this.app = express();
    }

    // Initialize the Express server
    static init(port: number) {
        return new Server(port);
    }

    // Start the Express server at specified port
    public start() {
        this.app.listen(this.port);
        console.log(`Server listening at localhost:${this.port}`);
    }
};

export default server;
