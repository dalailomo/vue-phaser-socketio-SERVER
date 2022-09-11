import { User, UserManager } from "modules/socket-handlers/handle-user-connections/types";

const users: { [key: string]: User } = {};

const addUser = (user: User) => {
    users[user.name] = user; // for this dirty example, we use the name as unique key :shrug:
};

const removeUser = (name: string) => {
    delete users[name];
};

const getConnectedUsers = () => {
    return { ...users };
};

export default {
    addUser,
    removeUser,
    getConnectedUsers,
} as UserManager;
