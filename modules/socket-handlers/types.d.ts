import { Socket } from "socket.io";
import { ModuleDefinition as InMemoryUserModuleDefinition } from "../in-memory-user-manager/types";
import { UserManager } from "./handle-user-connections/types";

export interface ModuleDefinition {
    handleUserConnections: (
        socket: Socket,
        userModule: UserManager
    ) => void;
}
