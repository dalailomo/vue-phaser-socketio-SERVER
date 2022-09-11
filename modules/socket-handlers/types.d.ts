import { Server, Socket } from "socket.io";
import { UserManager } from "./handle-user-connections/types";
export interface ModuleDefinition {
    handleUserConnections: (socket: Socket, userModule: UserManager) => void;
    handleIoEmitLog: (socket: Socket, io: Server) => void;
}
