import { Socket } from "socket.io";

const io = require('socket.io')();

io.on('connection', (socket: Socket) => {
    console.log("Connected user, socket id:", socket.id);
});

io.listen(3000, {
    cors: {
        origin: ["http://localhost:8080"]
    }
});
