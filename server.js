const jsonServer = require('json-server');
const cors = require('cors')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3000;

server.use(cors())
server.use(middlewares);
server.use(router);

server.listen(port);
