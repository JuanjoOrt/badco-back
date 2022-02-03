const jsonServer = require('json-server');
const cors = require('cors')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3000;

const whitelist = [
    'http://localhost', // add here the url when you access to your angular app
    'http://localhost:3000',
    'http://otherdomain.com'
];

const corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'accept, content-type'
};

server.use(cors(corsOptions))
server.use(middlewares);
server.use(router);

server.listen(port);
