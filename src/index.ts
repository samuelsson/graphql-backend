import cors from 'cors';
import Server from './server';
import graphql from './graphql';

const server = Server.init(4000);

const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.app.use(cors(corsOptions));
server.app.use('/api', graphql);

server.start();
