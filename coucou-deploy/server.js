const debug = require("debug")("node-angular");
const http = require("http");
const app = require("./index.js");

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
};


const port = normalizePort(process.env.PORT || '3006');
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

const io = require("./util/socket").init(server ,
    {
        cors: {
            origin: '*',
            methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization" ],
        }
    }
);

io.on('connection', (socket) => {
    console.log('client Connected');
    socket.on("tracking", data => {
        socket.emit( 'restaurant' + data.id, data.user);
    });
});

server.listen(port,() => console.log('server on ', port));
