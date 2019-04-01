import cors from 'cors';
import Server from './server';
import graphql from './graphql';

const server = Server.init(4000);

server.app.use(cors());
server.app.use('/api', graphql);

server.start();
