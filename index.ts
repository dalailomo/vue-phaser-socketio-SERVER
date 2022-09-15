import { Socket } from "socket.io";
import socketHandlers from "./modules/socket-handlers";
import inMemoryUserManager from "./modules/in-memory-user-manager";

// hello guapeton

const io = require('socket.io')();

io.on('connection', (socket: Socket) => {
    socketHandlers.handleUserConnections(socket, inMemoryUserManager);
    socketHandlers.handleIoEmitLog(socket, io);
});

io.listen(3000, {
    cors: {
        origin: ["http://localhost:8080"]
    }
});
