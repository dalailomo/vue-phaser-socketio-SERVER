import { ModuleDefinition } from "./types";
import { handleUserConnections } from "./handle-user-connections";
import { handleIoEmitLog } from "./handle-io-emit-log";

export default {
    handleUserConnections,
    handleIoEmitLog,
} as ModuleDefinition;
