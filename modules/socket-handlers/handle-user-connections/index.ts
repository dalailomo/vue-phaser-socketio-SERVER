import { Socket } from "socket.io";
import { UserManager } from "./types";

const EVENT = {
    SB_ConnectedUsers: 'handle-user-connections:socket-broadcast:get-connected-users',
    CE_ConnectedUsers: 'handle-user-connections:client-emits:get-connected-users',
}

export const handleUserConnections = (
    socket: Socket,
    { addUser, removeUser, getConnectedUsers }: UserManager
) => {
    const name = socket.handshake.query.name as string;
    if (!name) return;

    addUser({ id: socket.id, name });
    socket.broadcast.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());

    socket.on("disconnect", () => {
        removeUser(name);
        socket.broadcast.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());
    });

    socket.on(EVENT.CE_ConnectedUsers, () => {
        socket.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());
    });
};

export const HANDLE_USER_CONNECTIONS_EVENT = EVENT;
