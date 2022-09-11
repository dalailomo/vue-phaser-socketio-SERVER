import { Socket } from "socket.io";
import { UserManager } from "./types";

const EVENT = {
    serverReturnsConnectedUsers: 'handle-user-connections:server-returns:get-connected-users',
    clientRequestConnectedUsers: 'handle-user-connections:client-request:get-connected-users',
}

export const handleUserConnections = (
    socket: Socket,
    { addUser, removeUser, getConnectedUsers }: UserManager
) => {
    const name = socket.handshake.query.name as string;
    if (!name) return;

    addUser({ id: socket.id, name });
    socket.broadcast.emit(EVENT.serverReturnsConnectedUsers, getConnectedUsers());

    socket.on("disconnect", () => {
        removeUser(name);
        socket.broadcast.emit(EVENT.serverReturnsConnectedUsers, getConnectedUsers());
    });

    socket.on(EVENT.clientRequestConnectedUsers, () => {
        socket.emit(EVENT.serverReturnsConnectedUsers, getConnectedUsers());
    });
};

export const HANDLE_USER_CONNECTIONS_EVENT = EVENT;
