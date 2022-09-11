import { Socket } from "socket.io";
import socketHandlers from "modules/socket-handlers";
import inMemoryUserManager from "modules/in-memory-user-manager";

const io = require('socket.io')();

io.on('connection', (socket: Socket) => {
    socketHandlers.handleUserConnections(socket, inMemoryUserManager);
});

io.listen(3000, {
    cors: {
        origin: ["http://localhost:8080"]
    }
});
